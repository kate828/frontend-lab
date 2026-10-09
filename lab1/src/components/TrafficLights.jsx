import PropTypes from 'prop-types'; 
import Light from './Light';
import './TrafficLights.css';

export default function TrafficLights({ orientation = 'vertical' }) {
  return (
    <div className={`traffic-light-container ${orientation}`}>
      <Light color="red" />
      <Light color="yellow" />
      <Light color="green" />
    </div>
  );
}

TrafficLights.propTypes = {
  orientation: PropTypes.oneOf(['vertical', 'horizontal']),
};