import TrafficLights from './components/TrafficLights';
import './App.css';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Лабораторна робота 2: Стан та події</h1>
      <TrafficLights />
    </div>
  );
}

export default App;