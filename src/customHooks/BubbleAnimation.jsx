import React, { useEffect, useState } from 'react';
import useMousePosition from './MousePosition'; // Import the hook

const MouseBubbleEffect = () => {
  const { x, y } = useMousePosition();
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBubbles((prevBubbles) => [
        ...prevBubbles,
        {
          x: x + Math.random() * 20 - 10, // Small variation around mouse position
          y: y + Math.random() * 20 - 10, // Small variation around mouse position
          size: Math.random() * 5 + 5,    // Bubble size
          opacity: Math.random() * 0.4 + 0.3, // Opacity for variety
        },
      ]);
    }, 100);

    return () => clearInterval(interval);
  }, [x, y]);

  return (
    <div className="absolute w-full h-full top-0 left-0 pointer-events-none">
      {bubbles.map((bubble, index) => (
        <div
          key={index}
          className="absolute bg-white rounded-full opacity-80"
          style={{
            left: `${bubble.x}px`,
            top: `${bubble.y}px`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            transform: `scale(${Math.random() * 1.5 + 0.5})`,
            animation: `moveBubble 3s infinite ease-in-out`,
          }}
        />
      ))}
    </div>
  );
};

export default MouseBubbleEffect;
