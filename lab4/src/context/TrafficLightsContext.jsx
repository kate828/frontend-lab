import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const PHASES = ['red', 'yellow', 'green', 'yellow'];

const TrafficLightsContext = createContext(null);

export function TrafficLightsProvider({ children }) {
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

  const selectSignal = (color) => {
    if (isAutomatic) return;

    const newIndex = color === 'red' ? 0 : color === 'yellow' ? 1 : 2;
    setPhaseIndex(newIndex);
    setClicks((prev) => ({
      ...prev,
      [color]: prev[color] + 1,
    }));
  };

  const startAutomatic = () => setIsAutomatic(true);
  const stopAutomatic = () => setIsAutomatic(false);
  const toggleOrientation = () => {
    setOrientation((prev) => (prev === 'vertical' ? 'horizontal' : 'vertical'));
  };

  const value = {
    activeColor,
    clicks,
    orientation,
    isAutomatic,
    selectSignal,
    startAutomatic,
    stopAutomatic,
    toggleOrientation,
  };

  return (
    <TrafficLightsContext.Provider value={value}>
      {children}
    </TrafficLightsContext.Provider>
  );
}

TrafficLightsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useTrafficLights() {
  const context = useContext(TrafficLightsContext);
  if (!context) {
    throw new Error('useTrafficLights має використовуватися всередині TrafficLightsProvider');
  }
  return context;
}