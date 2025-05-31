import { z } from 'zod';

export const CommentSchema = z.object({
  id: z.string().uuid().optional(),
  poemId: z.number().int(),
  author: z.string().min(2, 'الاسم يجب أن يكون أكثر من حرفين').max(50, 'الاسم طويل جداً'),
  content: z.string().min(3, 'التعليق يجب أن يكون أكثر من 3 أحرف').max(1000, 'التعليق طويل جداً'),
  timestamp: z.number().int()
});

export type CommentType = z.infer<typeof CommentSchema>;