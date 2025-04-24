import { useState } from 'react';

type FontSize = 'text-base' | 'text-lg' | 'text-xl' | 'text-2xl' | 'text-3xl';

export const useFontSize = () => {
  const [fontSize, setFontSize] = useState<FontSize>('text-xl');
  
  const fontSizes: FontSize[] = ['text-base', 'text-lg', 'text-xl', 'text-2xl', 'text-3xl'];
  
  const increaseFontSize = () => {
    const currentIndex = fontSizes.indexOf(fontSize);
    if (currentIndex < fontSizes.length - 1) {
      setFontSize(fontSizes[currentIndex + 1]);
    }
  };
  
  const decreaseFontSize = () => {
    const currentIndex = fontSizes.indexOf(fontSize);
    if (currentIndex > 0) {
      setFontSize(fontSizes[currentIndex - 1]);
    }
  };
  
  return { fontSize, increaseFontSize, decreaseFontSize };
};