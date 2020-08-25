import React from 'react'

export const Forms = ({dispatch}) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Nueva tarea");

    const newTodo = {
      id: new Date().getTime(),
      desc: 'Nueva tarea',
      done: false
    }
    const action = {
      type: 'add',
      payload: newTodo
    }
    dispatch(action);

  }
    return (
      <form
          onSubmit={handleSubmit}
        >
        <input
          type="text"
          name="description"
          autoComplete="off"
          placeholder="Ingresa una tarea aqui...."
          className="form-control"
        />
        <button type="submit" className="btn btn-outline-primary btn-block mt-2">
          Agregar
        </button>
      </form>
    );
}
