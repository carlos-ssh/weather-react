import React, { useState } from 'react';

const Formulario = () => {

  const [busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: ''
  });

  const [error, guardarError] = useState(false);

  // destructuring ... extraer ciudad y pais
  const { ciudad, pais } = busqueda;

  // funcion que coloca los elementos en el state
  const handleChange = e => {
    // Actualizar el state
    guardarBusqueda({
      ...busqueda,
      [e.target.name] : e.target.value
    })
  }

  // Cuando el usuario da submit al form
  const handleSubmit = e => {
    e.preventDefault();

    // Validar
    if (ciudad.trim() === '' || pais.trim() === '') {
      guardarError(true);
      return;
    }

    guardarError(false);

    // Pasar al componente principal
  }

  return (
    <form
      onSubmit={handleSubmit}
    >
      {error ? <p className="error red darken-4">All fields are required</p> : null}
      <div className="input-field col s12">
        <input
          type="text"
          name="ciudad"
          id="ciudad"
          value={ciudad}
          onChange={handleChange}
        />
        <label htmlFor="ciudad">City:</label>
      </div>
      <div className="input-field col s12">
        <select
          name="pais"
          id="pais"
          value={pais}
          onChange={handleChange}
        >
          <option value=""> Select a Country </option>
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="PE">Perú</option>
        </select>
        <label htmlFor="pais">Country:</label>
      </div>
      <div className="input-field col s12">
        <input
          type="submit"
          value="Search"
          className="waves-effect waves-light btn-large btn-block yellow accent-4"
        />
      </div>
    </form>
  );
}

export default Formulario;