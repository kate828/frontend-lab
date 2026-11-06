import PropTypes from 'prop-types';
import './Light.css';

export default function Light({ color, isActive, onClick, disabled }) {
  return (
    <div 
      className={`light ${isActive ? 'active' : ''} ${disabled ? 'disabled' : ''}`} 
      style={{ backgroundColor: color, color: color }}
      onClick={() => {
        if (!disabled) onClick(color);
      }}
    ></div>
  );
}

Light.propTypes = {
  color: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};