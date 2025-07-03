import {  useState, useEffect, useRef } from 'react';
import type {RefObject} from 'react'

export const useIntersectionObserver = (
  options?: IntersectionObserverInit
): [RefObject<HTMLDivElement>, boolean] => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null); 

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
      if (entry.isIntersecting && currentRef) observer.unobserve(currentRef);
    }, options);

    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [options]);

  return [ref as React.RefObject<HTMLDivElement>, isVisible];
};