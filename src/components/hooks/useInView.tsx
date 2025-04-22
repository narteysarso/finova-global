import { useEffect, useRef, useState } from 'react';

interface InViewOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useInView({
  threshold = 0,
  rootMargin = '0px',
  triggerOnce = false,
}: InViewOptions = {}): [React.RefObject<HTMLElement>, boolean] {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting;
        setIsInView(inView);

        if (inView && triggerOnce && ref.current) {
          observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return [ref, isInView];
}