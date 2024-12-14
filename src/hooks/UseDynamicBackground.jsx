import { useState, useEffect } from 'react';

function UseDynamicBackground() {
  const [backgroundColor, setBackgroundColor] = useState('#f4f4f9'); // Default light color
  
  useEffect(() => {
    const colors = ['#E0E0E0', '#3D5AFE', '#ffeb3b', '#42A5F5', '#8E24AA'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBackgroundColor(randomColor);
  }, []);

  return backgroundColor;
}

export default UseDynamicBackground;
