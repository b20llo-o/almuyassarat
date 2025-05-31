import React, { useState } from 'react';
import { MessageSquare, Send, Clock } from 'lucide-react';

interface CommentSectionProps {
  poemId: number;
}

const CommentSection: React.FC<CommentSectionProps> = ({ poemId }) => {
  const { comments, isLoading, error: fetchError, addComment } = useComments(poemId);
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    try {
      // Validate input using Zod schema
      CommentSchema.parse({
        poemId,
        author: author.trim(),
        content: content.trim(),
      });
      
      setIsSubmitting(true);
      const result = await addComment(author, content);
      
      if (result) {
        setContent('');
        setSuccess('تم إضافة تعليقك بنجاح');
        
        setTimeout(() => {
          setSuccess(null);
        }, 3000);
      } else {
        setError('حدث خطأ أثناء إضافة التعليق');
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('حدث خطأ غير متوقع');
      }
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const formatDate = (timestamp: number) => {
    const now = Date.now();
    const diffInSeconds = Math.floor((now - timestamp) / 1000);
    
    if (diffInSeconds < 60) {
      return 'منذ لحظات';
    } else if (diffInSeconds < 3600) {
      return `منذ ${Math.floor(diffInSeconds / 60)} دقيقة`;
    } else if (diffInSeconds < 86400) {
      return `منذ ${Math.floor(diffInSeconds / 3600)} ساعة`;
    } else {
      return `منذ ${Math.floor(diffInSeconds / 86400)} يوم`;
    }
  };

  return (
    <div className="mt-12">
      <div className="flex items-center gap-2 mb-6">
        <MessageSquare size={20} className="text-primary-700" />
        <h2 className="text-xl font-aref font-bold text-primary-800">التعليقات</h2>
      </div>

      {/* Comment form */}
      <div className="card mb-8">
        <h3 className="text-lg font-aref mb-4 text-primary-700">أضف تعليقاً جديداً</h3>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="author" className="block text-primary-700 mb-1">الاسم</label>
            <input
              type="text"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full px-3 py-2 bg-primary-50 rounded-md focus:ring-2 focus:ring-primary-300 focus:outline-none transition-all"
              placeholder="أدخل اسمك هنا"
              disabled={isSubmitting}
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="content" className="block text-primary-700 mb-1">التعليق</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={4}
              className="w-full px-3 py-2 bg-primary-50 rounded-md focus:ring-2 focus:ring-primary-300 focus:outline-none transition-all resize-none"
              placeholder="أكتب تعليقك هنا"
              disabled={isSubmitting}
            ></textarea>
          </div>
          
          {error && (
            <div className="mb-4 p-2 bg-accent-50 text-accent-700 rounded-md animate-appear">
              {error}
            </div>
          )}
          
          {success && (
            <div className="mb-4 p-2 bg-green-50 text-green-700 rounded-md animate-appear">
              {success}
            </div>
          )}
          
          <div className="flex justify-start">
            <button
              type="submit"
              className="btn btn-primary inline-flex items-center gap-2"
              disabled={isSubmitting}
            >
              <Send size={16} />
              {isSubmitting ? 'جاري الإرسال...' : 'أرسل التعليق'}
            </button>
          </div>
        </form>
      </div>

      {/* Comments list */}
      <div className="space-y-4">
        {isLoading ? (
          <div className="text-center py-6 text-primary-500">جاري تحميل التعليقات...</div>
        ) : fetchError ? (
          <div className="text-center py-6 text-accent-700">{fetchError}</div>
        ) : comments.length === 0 ? (
          <div className="text-center py-6 text-primary-500">لا توجد تعليقات بعد. كن أول من يعلق!</div>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="card animate-fadeIn hover:bg-primary-50/50">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-aref font-bold text-primary-700">{comment.author}</h4>
                <div className="flex items-center text-primary-400 text-sm">
                  <Clock size={14} className="ml-1" />
                  {formatDate(comment.timestamp || 0)}
                </div>
              </div>
              <p className="text-primary-600 whitespace-pre-line">{comment.content}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CommentSection;
