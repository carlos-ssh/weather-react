import React from 'react';
import PropTypes from 'prop-types';

const Clima = ({resultado}) => {

  // Extraer los valores de la API
  const { name, main } = resultado;

  if(!name) return null;

  const kelvin = 273.15;

  return (
    <div className="card-panel white col s12">
      <div className="black-text">
        <h2>The weather from: {name} is:</h2>
        <p className="temperatura">
          { parseFloat( main.temp - kelvin, 10 ).toFixed(1) } <span> &#x2103; </span>
        </p>
        <p className="col s6">
          Max:
          <br />
          { parseFloat( main.temp_max - kelvin, 10 ).toFixed(1) } <span> &#x2103; </span>
        </p>
        <p className="col s6">
          Min: <br />
          { parseFloat( main.temp_min - kelvin, 10 ).toFixed(1) } <span> &#x2103; </span>
        </p>
      </div>
    </div>
  );
}

Clima.propTypes = {
  resultado: PropTypes.object.isRequired
}

export default Clima;
