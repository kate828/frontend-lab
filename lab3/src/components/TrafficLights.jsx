import { useState, useEffect } from 'react';
import Light from './Light';
import StatsBar from './StatsBar';
import './TrafficLights.css';

const PHASES = ['red', 'yellow', 'green', 'yellow'];

export default function TrafficLights() {
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [isAutomatic, setIsAutomatic] = useState(false);
  const [clicks, setClicks] = useState({ red: 0, yellow: 0, green: 0 });
  const [orientation, setOrientation] = useState('vertical');

  const activeColor = PHASES[phaseIndex];

  useEffect(() => {
    if (!isAutomatic) return;

    const timerId = setInterval(() => {
      setPhaseIndex((prevIndex) => (prevIndex + 1) % PHASES.length);
    }, 1500);

    return () => clearInterval(timerId);
  }, [isAutomatic]);

  const handleLightClick = (color) => {
    if (isAutomatic) return; 

    const newIndex = color === 'red' ? 0 : color === 'yellow' ? 1 : 2;
    setPhaseIndex(newIndex);
    setClicks((prev) => ({ ...prev, [color]: prev[color] + 1 }));
  };

  return (
    <div className="traffic-lights-wrapper">
      <div className={`traffic-light-container ${orientation}`}>
        <Light color="red" isActive={activeColor === 'red'} disabled={isAutomatic} onClick={handleLightClick} />
        <Light color="yellow" isActive={activeColor === 'yellow'} disabled={isAutomatic} onClick={handleLightClick} />
        <Light color="green" isActive={activeColor === 'green'} disabled={isAutomatic} onClick={handleLightClick} />
      </div>

      <StatsBar 
        clicks={clicks}
        activeColor={activeColor}
        orientation={orientation}
        isAutomatic={isAutomatic}
        onStart={() => setIsAutomatic(true)}
        onStop={() => setIsAutomatic(false)}
        onToggleOrientation={() => setOrientation(prev => prev === 'vertical' ? 'horizontal' : 'vertical')}
      />
    </div>
  );
}