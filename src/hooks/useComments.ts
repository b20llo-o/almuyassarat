import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { CommentSchema, CommentType } from '../lib/validation';

export const useComments = (poemId: number) => {
  const [comments, setComments] = useState<CommentType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const { data, error } = await supabase
          .from('comments')
          .select('*')
          .eq('poem_id', poemId)
          .order('timestamp', { ascending: false });

        if (error) throw error;

        setComments(data || []);
      } catch (err) {
        console.error('Error fetching comments:', err);
        setError('حدث خطأ أثناء تحميل التعليقات');
      } finally {
        setIsLoading(false);
      }
    };

    fetchComments();

    // Real-time subscription
    const subscription = supabase
      .channel(`comments-${poemId}`)
      .on('postgres_changes', {
        event: 'INSERT',
        schema: 'public',
        table: 'comments',
        filter: `poem_id=eq.${poemId}`,
      }, (payload) => {
        setComments((prev) => [payload.new as CommentType, ...prev]);
      })
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, [poemId]);

  const addComment = async (author: string, content: string): Promise<boolean> => {
    try {
      const newComment = {
        poem_id: poemId,
        author: author.trim(),
        content: content.trim(),
        timestamp: Math.floor(Date.now() / 1000) // Convert to Unix timestamp (seconds)
      };

      const { error } = await supabase
        .from('comments')
        .insert([newComment]);

      if (error) throw error;

      return true;
    } catch (err) {
      console.error('Error adding comment:', err);
      setError(err instanceof Error ? err.message : 'حدث خطأ أثناء إضافة التعليق');
      return false;
    }
  };

  return {
    comments,
    isLoading,
    error,
    addComment,
  };
};