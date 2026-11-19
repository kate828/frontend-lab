import PropTypes from 'prop-types';
import './StatsBar.css';

export default function StatsBar({ clicks, activeColor, orientation, isAutomatic }) {
  const totalClicks = clicks.red + clicks.yellow + clicks.green;
  const orientationText = orientation === 'vertical' ? 'Вертикальна' : 'Горизонтальна';
  const modeText = isAutomatic ? 'Автоматичний' : 'Ручний';

  return (
    <div className="stats-bar">
      <h3>Поточний стан та статистика</h3>
      <p><strong>Активний сигнал:</strong> {activeColor}</p>
      <p><strong>Режим:</strong> {modeText}</p>
      <p><strong>Орієнтація:</strong> {orientationText}</p>
      <hr />
      <ul>
        <li>🔴 Ручні кліки (червоний): {clicks.red}</li>
        <li>🟡 Ручні кліки (жовтий): {clicks.yellow}</li>
        <li>🟢 Ручні кліки (зелений): {clicks.green}</li>
      </ul>
      <hr />
      <p><strong>Всього ручних натискань:</strong> {totalClicks}</p>
    </div>
  );
}

StatsBar.propTypes = {
  clicks: PropTypes.shape({
    red: PropTypes.number.isRequired,
    yellow: PropTypes.number.isRequired,
    green: PropTypes.number.isRequired,
  }).isRequired,
  activeColor: PropTypes.string.isRequired,
  orientation: PropTypes.string.isRequired,
  isAutomatic: PropTypes.bool.isRequired,
};