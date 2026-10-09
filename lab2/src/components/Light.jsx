import PropTypes from 'prop-types';
import './Light.css';

export default function Light({ color, isActive, onClick }) {
  return (
    <div 
      className={`light ${isActive ? 'active' : ''}`} 
      style={{ backgroundColor: color, color: color }}
      onClick={() => onClick(color)}
    ></div>
  );
}

Light.propTypes = {
  color: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};