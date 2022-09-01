import React from 'react';
import Energy from '../../components/Monitoring/Energy/Energy';
import Temperature from '../../components/Monitoring/Temperature/Temperature';
import Vibration from '../../components/Monitoring/Vibration/Vibration';

function Graphics() {
  return (
    <div>
      <Temperature />
      <Energy />
      <Vibration />
    </div>
  )
}

export default Graphics;