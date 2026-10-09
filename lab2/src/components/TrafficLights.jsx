import { useState } from 'react';
import Light from './Light';
import StatsBar from './StatsBar';
import './TrafficLights.css';

export default function TrafficLights() {
  const [activeColor, setActiveColor] = useState('red');
  const [clicks, setClicks] = useState({ red: 0, yellow: 0, green: 0 });
  const [orientation, setOrientation] = useState('vertical');

  const handleLightClick = (color) => {
    setActiveColor(color);
    setClicks((prevClicks) => ({
      ...prevClicks,
      [color]: prevClicks[color] + 1
    }));
  };

  const toggleOrientation = () => {
    setOrientation((prev) => (prev === 'vertical' ? 'horizontal' : 'vertical'));
  };

  return (
    <div className="traffic-lights-wrapper">
      <div className={`traffic-light-container ${orientation}`}>
        <Light color="red" isActive={activeColor === 'red'} onClick={handleLightClick} />
        <Light color="yellow" isActive={activeColor === 'yellow'} onClick={handleLightClick} />
        <Light color="green" isActive={activeColor === 'green'} onClick={handleLightClick} />
      </div>
      <StatsBar 
        clicks={clicks}
        activeColor={activeColor}
        orientation={orientation}
        onToggleOrientation={toggleOrientation}
      />
    </div>
  );
}