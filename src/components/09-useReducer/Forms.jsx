import React from 'react'

export const Forms = () => {
    return (
      <form>
        <input
          type="text"
          name="description"
          autoComplete="off"
          placeholder="Ingresa una tarea aqui...."
          className="form-control"
        />
        <button className="btn btn-outline-primary btn-block mt-2">
          Agregar
        </button>
      </form>
    );
}
