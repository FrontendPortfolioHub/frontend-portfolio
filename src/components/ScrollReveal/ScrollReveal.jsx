import { useState, useEffect, useRef } from 'react';
import './ScrollReveal';

export const ScrollReveal = ({ children }) => {
  const elementRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isRevealed) {
          setIsRevealed(true);
        }
      },
      { threshold: 0.5 },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [isRevealed]);

  return (
    <div
      ref={elementRef}
      className={`element--hidden ${isRevealed ? 'revealed' : ''}`}
    >
      {children}
    </div>
  );
};
