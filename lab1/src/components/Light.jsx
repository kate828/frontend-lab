import PropTypes from 'prop-types';
import './Light.css';

export default function Light({ color }) {
  return (
    <div className="light" style={{ backgroundColor: color }}></div>
  );
}

Light.propTypes = {
  color: PropTypes.string.isRequired,
};