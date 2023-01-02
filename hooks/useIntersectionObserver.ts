import { useEffect, useState } from 'react';

function useIntersectionObserver(isContentLoaded: boolean) {
  const [currentId, setCurrentId] = useState<string | null>(null);

  useEffect(() => {
    let prevY = 0;
    const getScrollDirection = () => {
      if (window.scrollY === 0 && prevY === 0) return null;
      prevY = window.scrollY;
      if (window.scrollY > prevY) return 'down';
      return 'up';
    };
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const direction = getScrollDirection();
        if ((direction === 'down' && !entry.isIntersecting) || (direction === 'up' && entry.isIntersecting)) {
          setCurrentId(entry.target.id ?? null);
        }
      });
    };
    const observer = new IntersectionObserver(callback, { rootMargin: '0px 0px -40% 0px' });
    const headings = Array.from(document.querySelectorAll('.toastui-editor-contents h1, h2, h3'));
    headings.forEach((heading) => {
      observer.observe(heading);
    });

    return () => observer.disconnect();
  }, [isContentLoaded]);

  return currentId;
}

export default useIntersectionObserver;
