
import { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.tagName === 'A' || 
                           target.tagName === 'BUTTON' || 
                           target.closest('a') || 
                           target.closest('button') ||
                           target.classList.contains('cursor-none');
      setIsHovering(isInteractive);
    };

    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver);

    // Hide default cursor
    document.body.style.cursor = 'none';

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        className={`fixed pointer-events-none z-50 transition-all duration-150 ${
          isClicking ? 'scale-75' : 'scale-100'
        } ${isHovering ? 'scale-150' : ''}`}
        style={{
          left: position.x - 10,
          top: position.y - 10,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.75 : isHovering ? 1.5 : 1})`,
        }}
      >
        <div className="w-5 h-5 border-2 border-green-400 rounded-full bg-green-400/20">
          <div className="w-1 h-1 bg-green-400 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>

      {/* Trailing effect */}
      <div
        className="fixed pointer-events-none z-40"
        style={{
          left: position.x - 20,
          top: position.y - 20,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div 
          className={`w-10 h-10 border border-cyan-400/50 rounded-full transition-all duration-300 ${
            isHovering ? 'scale-125' : 'scale-100'
          }`}
        />
      </div>
    </>
  );
};

export default CustomCursor;
