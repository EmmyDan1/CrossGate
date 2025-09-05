import {useState, useEffect} from 'react';


export const useImagePreload = (src: string) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setLoaded(true);
    img.onerror = () => setLoaded(true)
  }, [src]);

  return loaded;
};