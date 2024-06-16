import { useEffect, useState } from 'react';
import { cn } from '../lib/utils';

function TypingAnimation({ text, duration = 100, className }) {
  const [displayedText, setDisplayedText] = useState('');
  const [i, setI] = useState(0);

  useEffect(() => {
    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(prevState => prevState + text.charAt(i));
        setI(prevI => prevI + 1);
      } else {
        clearInterval(typingEffect);
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [duration, i, text]);

  return (
    <h1>
      {displayedText || text}
    </h1>
  );
}

export default TypingAnimation;
