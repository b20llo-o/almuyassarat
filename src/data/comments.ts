import { useEffect, useState } from 'react';

export interface Comment {
  id: string;
  poemId: number;
  author: string;
  content: string;
  timestamp: number;
}

// Initialize IndexedDB
const initDB = async () => {
  return new Promise<IDBDatabase>((resolve, reject) => {
    const request = indexedDB.open('poetryDB', 1);

    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains('comments')) {
        const store = db.createObjectStore('comments', { keyPath: 'id' });
        store.createIndex('poemId', 'poemId', { unique: false });
      }
    };
  });
};

// Custom hook to manage comments
export const useComments = (poemId: number) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load comments from IndexedDB
  useEffect(() => {
    const loadComments = async () => {
      try {
        const db = await initDB();
        const transaction = db.transaction('comments', 'readonly');
        const store = transaction.objectStore('comments');
        const index = store.index('poemId');
        const request = index.getAll(poemId);

        request.onsuccess = () => {
          const loadedComments = request.result;
          setComments(loadedComments.sort((a, b) => b.timestamp - a.timestamp));
          setIsLoading(false);
        };

        request.onerror = () => {
          console.error('Error loading comments:', request.error);
          setIsLoading(false);
        };
      } catch (error) {
        console.error('Error initializing DB:', error);
        setIsLoading(false);
      }
    };

    loadComments();
  }, [poemId]);

  // Add a new comment
  const addComment = async (author: string, content: string) => {
    try {
      const db = await initDB();
      const newComment: Comment = {
        id: Date.now().toString(),
        poemId,
        author,
        content,
        timestamp: Date.now(),
      };

      const transaction = db.transaction('comments', 'readwrite');
      const store = transaction.objectStore('comments');
      
      return new Promise<boolean>((resolve) => {
        const request = store.add(newComment);
        
        request.onsuccess = () => {
          setComments(prev => [newComment, ...prev]);
          resolve(true);
        };
        
        request.onerror = () => {
          console.error('Error adding comment:', request.error);
          resolve(false);
        };
      });
    } catch (error) {
      console.error('Error adding comment:', error);
      return false;
    }
  };

  return {
    comments,
    isLoading,
    addComment,
  };
};