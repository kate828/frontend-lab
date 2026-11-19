import { useTrafficLights } from '../context/TrafficLightsContext';
import StatsBar from '../components/StatsBar';

export default function StatsPage() {
  const { clicks, activeColor, orientation, isAutomatic } = useTrafficLights();

  return (
    <div>
      <h2>Статистика взаємодій (лише для читання)</h2>
      <StatsBar
        clicks={clicks}
        activeColor={activeColor}
        orientation={orientation}
        isAutomatic={isAutomatic}
      />
    </div>
  );
}