import PropTypes from 'prop-types';
import Light from './Light';
import './TrafficLights.css';

export default function TrafficLights({
  activeColor,
  orientation,
  isAutomatic,
  onSelectSignal,
  onStart,
  onStop,
  onToggleOrientation,
}) {
  const orientationText = orientation === 'vertical' ? 'Вертикальна' : 'Горизонтальна';
  const modeText = isAutomatic ? 'Автоматичний' : 'Ручний';

  return (
    <div className="traffic-lights-wrapper">
      <div className={`traffic-light-container ${orientation}`}>
        <Light
          color="red"
          isActive={activeColor === 'red'}
          disabled={isAutomatic}
          onClick={onSelectSignal}
        />
        <Light
          color="yellow"
          isActive={activeColor === 'yellow'}
          disabled={isAutomatic}
          onClick={onSelectSignal}
        />
        <Light
          color="green"
          isActive={activeColor === 'green'}
          disabled={isAutomatic}
          onClick={onSelectSignal}
        />
      </div>

      <div className="control-panel">
        <h3>Керування світлофором</h3>
        <p><strong>Поточний сигнал:</strong> {activeColor}</p>
        <p><strong>Режим роботи:</strong> {modeText}</p>
        <p><strong>Орієнтація:</strong> {orientationText}</p>

        <div className="control-buttons">
          <button className="btn btn-start" onClick={onStart} disabled={isAutomatic}>
            Запустити
          </button>
          <button className="btn btn-stop" onClick={onStop} disabled={!isAutomatic}>
            Зупинити
          </button>
        </div>

        <button className="btn btn-toggle" onClick={onToggleOrientation}>
          Змінити орієнтацію
        </button>
      </div>
    </div>
  );
}

TrafficLights.propTypes = {
  activeColor: PropTypes.string.isRequired,
  orientation: PropTypes.string.isRequired,
  isAutomatic: PropTypes.bool.isRequired,
  onSelectSignal: PropTypes.func.isRequired,
  onStart: PropTypes.func.isRequired,
  onStop: PropTypes.func.isRequired,
  onToggleOrientation: PropTypes.func.isRequired,
};