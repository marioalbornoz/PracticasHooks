import React, { useReducer } from 'react'
// import PropTypes from 'prop-types'
import './styles.css';
import { todoReducer } from './todoReducer';
import { Forms } from './Forms';
import { Todo } from './Todo';

const initialState = [{
    id: new Date().getTime(),
    desc: 'Aprender React',
    done: false
}]

export const TodoApp = props => {

    const [todos, dispatch] = useReducer(todoReducer, initialState)
    console.log(todos);
    return (
      <div>
        <h1>TodoApp ({todos.length})</h1>
        <hr />

        <div className="row">
          <div className="col-7">
            <ul className="list-group list-group-flush">
            {todos.map((todo, i) => (
              <Todo todo={todo} key={todo.id} i={i}/>
              ))}
            </ul>
          </div>
          <div className="col-5">
            <h4>Agregar TODO</h4>
            <hr />
            <Forms dispatch={dispatch} />
          </div>
        </div>
      </div>
    );
}

// TodoApp.propTypes = {

// }
