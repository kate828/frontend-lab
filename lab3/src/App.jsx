import TrafficLights from './components/TrafficLights';
import './index.css';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Лабораторна робота 3: Ефекти (Таймер)</h1>
      <TrafficLights />
    </div>
  );
}

export default App;