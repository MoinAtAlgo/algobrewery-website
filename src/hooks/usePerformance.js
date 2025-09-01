import { useEffect } from 'react';

export const usePerformance = (componentName) => {
  useEffect(() => {
    const startTime = performance.now();
    
    return () => {
      const endTime = performance.now();
      const duration = endTime - startTime;
      
      // Log performance metrics in development
      if (process.env.NODE_ENV === 'development') {
        console.log(`${componentName} render time: ${duration.toFixed(2)}ms`);
      }
    };
  });
};

export const usePageLoad = () => {
  useEffect(() => {
    const handleLoad = () => {
      if (performance.timing) {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        
        if (process.env.NODE_ENV === 'development') {
          console.log(`Page load time: ${loadTime}ms`);
        }
      }
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);
};
