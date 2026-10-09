import PropTypes from 'prop-types';
import './StatsBar.css';

export default function StatsBar({ clicks, activeColor, orientation, onToggleOrientation }) {
  const totalClicks = clicks.red + clicks.yellow + clicks.green;
  const orientationText = orientation === 'vertical' ? 'Вертикальна' : 'Горизонтальна';

  return (
    <div className="stats-bar">
      <h3>Статистика світлофора</h3>
      <p><strong>Поточний сигнал:</strong> {activeColor}</p>
      <ul>
        <li>🔴 Червоний: {clicks.red}</li>
        <li>🟡 Жовтий: {clicks.yellow}</li>
        <li>🟢 Зелений: {clicks.green}</li>
      </ul>
      <hr />
      <p><strong>Всього кліків:</strong> {totalClicks}</p>
      <p><strong>Орієнтація:</strong> {orientationText}</p>
      <button className="toggle-btn" onClick={onToggleOrientation}>
        Змінити орієнтацію
      </button>
    </div>
  );
}

StatsBar.propTypes = {
  clicks: PropTypes.shape({
    red: PropTypes.number,
    yellow: PropTypes.number,
    green: PropTypes.number,
  }).isRequired,
  activeColor: PropTypes.string.isRequired,
  orientation: PropTypes.string.isRequired,
  onToggleOrientation: PropTypes.func.isRequired,
};