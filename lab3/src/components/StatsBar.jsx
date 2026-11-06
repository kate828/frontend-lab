import PropTypes from 'prop-types';
import './StatsBar.css';

export default function StatsBar({ 
  clicks, activeColor, orientation, isAutomatic, 
  onStart, onStop, onToggleOrientation 
}) {
  const totalClicks = clicks.red + clicks.yellow + clicks.green;
  const orientationText = orientation === 'vertical' ? 'Вертикальна' : 'Горизонтальна';
  const modeText = isAutomatic ? 'Автоматичний' : 'Ручний';

  return (
    <div className="stats-bar">
      <h3>Статистика світлофора</h3>
      <p><strong>Сигнал:</strong> {activeColor}</p>
      <p><strong>Режим:</strong> {modeText}</p>
      <ul>
        <li>🔴 Ручні кліки: {clicks.red}</li>
        <li>🟡 Ручні кліки: {clicks.yellow}</li>
        <li>🟢 Ручні кліки: {clicks.green}</li>
      </ul>
      <p><strong>Всього ручних кліків:</strong> {totalClicks}</p>
      <p><strong>Орієнтація:</strong> {orientationText}</p>

      <div className="controls">
        <button className="btn-start" onClick={onStart} disabled={isAutomatic}>Запустити</button>
        <button className="btn-stop" onClick={onStop} disabled={!isAutomatic}>Зупинити</button>
      </div>
      <button className="btn-toggle" onClick={onToggleOrientation}>Змінити орієнтацію</button>
    </div>
  );
}

StatsBar.propTypes = {
  clicks: PropTypes.object.isRequired,
  activeColor: PropTypes.string.isRequired,
  orientation: PropTypes.string.isRequired,
  isAutomatic: PropTypes.bool.isRequired,
  onStart: PropTypes.func.isRequired,
  onStop: PropTypes.func.isRequired,
  onToggleOrientation: PropTypes.func.isRequired,
};