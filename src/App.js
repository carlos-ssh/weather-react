import React from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

function App() {
  return (
    <React.Fragment>
      <Header
        titulo=" Weather App"
      />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario />
            </div>
            <div className="col m6 s12">2</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
