import React from 'react'

export const Todo = ({todo,i}) => {
    return (
      <li key={todo.id} className="list-group-item">
        <p className="text-center">
          {i + 1}. {todo.desc}
        </p>
        <button className="btn btn-danger">Borrar</button>
      </li>
    );
}
