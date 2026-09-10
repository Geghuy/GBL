import { useEffect } from 'react';

export default function CustomCursor() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const cursor = document.getElementById('cur');
      const ring = document.getElementById('ring');
      if (cursor && ring) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
        ring.style.left = `${e.clientX}px`;
        ring.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div className="cursor" id="cur"></div>
      <div className="ring" id="ring"></div>
    </>
  );
}