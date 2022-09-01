import React, { useContext } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Energy from '../../components/Monitoring/Energy/Energy';
import Temperature from '../../components/Monitoring/Temperature/Temperature';
import Vibration from '../../components/Monitoring/Vibration/Vibration';
import TractianContext from '../../context/TractianContext';

function Graphics() {
  const {
    assetInfo: { name },
    showTemperatureGraphic,
    setShowTemperatureGraphic,
    showEnergyGraphic,
    setShowEnergyGraphic,
    showVibrationGraphic,
    setShowVibrationGraphic,
  } = useContext(TractianContext);
  return (
    <main>
      <h1 className="title">Esses são os resultados de monitoramento do <strong>{ name }</strong>:</h1>
      <div className="d-flex justify-content-around flex-wrap">
        <ToggleButton
          type="checkbox"
          variant="outline-secondary"
          className="m-3"
          checked={ showTemperatureGraphic }
          onClick={ () => setShowTemperatureGraphic(!showTemperatureGraphic) }
        >
          Temperatura
        </ToggleButton>
        <ToggleButton
          type="checkbox"
          variant="outline-warning"
          className="m-3"
          checked={ showEnergyGraphic }
          onClick={ () => setShowEnergyGraphic(!showEnergyGraphic)}
        >
          Energia
        </ToggleButton>
        <ToggleButton
          type="checkbox"
          variant="outline-primary"
          className="m-3"
          checked={ showVibrationGraphic }
          onClick={ () => setShowVibrationGraphic(!showVibrationGraphic) }
        >
          Vibração
        </ToggleButton>
      </div>
      <section>
        { showTemperatureGraphic && <Temperature />}
        { showEnergyGraphic && <Energy /> }
        { showVibrationGraphic && <Vibration /> }
      </section>
    </main>
  )
}

export default Graphics;