import React, { useReducer } from 'react'
// import PropTypes from 'prop-types'
import './styles.css';
import { todoReducer } from './todoReducer';

const initialState = [{
    id: new Date().getTime(),
    desc: 'Aprender React',
    done: false
}]

export const TodoApp = props => {

    const [todos] = useReducer(todoReducer, initialState)
    console.log(todos);
    return (
      <div>
        <h1>TodoApp ({todos.length})</h1>
        <hr />

        <div className="row">
          <div className="col-7">
            <ul className="list-group list-group-flush">
              {todos.map((todo, i) => (
                <li key={todo.id} className="list-group-item">
                  <p className="text-center">
                    {i + 1}. {todo.desc}
                  </p>
                  <button className="btn btn-danger">Borrar</button>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-5">
            <h4>Agregar TODO</h4>
            <hr />
            <form>
              <input
                type="text"
                name="description"
                autoComplete="off"
                placeholder="Ingresa una tarea aqui...."
                className="form-control"
              />
              <button
                className="btn btn-outline-primary btn-block mt-2"  
                >
                Agregar
              </button>
            </form>
          </div>
        </div>
      </div>
    );
}

// TodoApp.propTypes = {

// }
