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
            <h1>TodoApp</h1>
            <hr/>

            <ul>
                <li>Limpiar</li>
                <li>Comer</li>
                <li>Dormir</li>
            </ul>
        </div>
    )
}

// TodoApp.propTypes = {

// }
