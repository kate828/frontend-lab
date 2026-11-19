import { useTrafficLights } from '../context/TrafficLightsContext';
import TrafficLights from '../components/TrafficLights';

export default function TrafficLightPage() {
  const {
    activeColor,
    orientation,
    isAutomatic,
    selectSignal,
    startAutomatic,
    stopAutomatic,
    toggleOrientation,
  } = useTrafficLights();

  return (
    <div>
      <h2>Інтерактивний світлофор</h2>
      <TrafficLights
        activeColor={activeColor}
        orientation={orientation}
        isAutomatic={isAutomatic}
        onSelectSignal={selectSignal}
        onStart={startAutomatic}
        onStop={stopAutomatic}
        onToggleOrientation={toggleOrientation}
      />
    </div>
  );
}