'use client';

import { useState, useEffect } from 'react';

export function useLoading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time and wait for DOM to be ready
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds minimum loading time

    // Also check if document is ready
    if (document.readyState === 'complete') {
      const quickTimer = setTimeout(() => {
        setIsLoading(false);
      }, 1500);
      return () => clearTimeout(quickTimer);
    }

    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return { isLoading };
}
