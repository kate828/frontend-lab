import TrafficLights from './components/TrafficLights';
import './App.css';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', alignItems: 'center' }}>
      
      <h1>Демонстрація світлофорів</h1>

      {/* Блок вертикального світлофора з центруванням */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2>Вертикальний:</h2>
        <TrafficLights orientation="vertical" />
      </div>

      {/* Блок горизонтального світлофора з центруванням */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2>Горизонтальний:</h2>
        <TrafficLights orientation="horizontal" />
      </div>

    </div>
  );
}

export default App;