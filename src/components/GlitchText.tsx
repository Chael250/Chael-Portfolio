
import { useState, useEffect } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
}

const GlitchText = ({ text, className = '' }: GlitchTextProps) => {
  const [glitchText, setGlitchText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?`~';
    
    const createGlitch = () => {
      if (Math.random() > 0.95) {
        setIsGlitching(true);
        
        const glitchInterval = setInterval(() => {
          const newText = text
            .split('')
            .map(char => 
              Math.random() > 0.8 
                ? glitchChars[Math.floor(Math.random() * glitchChars.length)]
                : char
            )
            .join('');
          
          setGlitchText(newText);
        }, 50);

        setTimeout(() => {
          clearInterval(glitchInterval);
          setGlitchText(text);
          setIsGlitching(false);
        }, 200);
      }
    };

    const interval = setInterval(createGlitch, 2000);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <h1 
      className={`${className} ${isGlitching ? 'animate-pulse' : ''} relative`}
      style={{
        textShadow: isGlitching 
          ? '2px 0 #ff0000, -2px 0 #00ffff, 0 2px #ffff00' 
          : '0 0 10px #00ff41, 0 0 20px #00ff41, 0 0 30px #00ff41'
      }}
    >
      {glitchText}
      {isGlitching && (
        <>
          <span 
            className="absolute top-0 left-0 text-red-500 opacity-70"
            style={{ transform: 'translate(-2px, 0)' }}
          >
            {glitchText}
          </span>
          <span 
            className="absolute top-0 left-0 text-cyan-500 opacity-70"
            style={{ transform: 'translate(2px, 0)' }}
          >
            {glitchText}
          </span>
        </>
      )}
    </h1>
  );
};

export default GlitchText;
