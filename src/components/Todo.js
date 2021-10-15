import React from 'react';
import { useDispatch } from 'react-redux'
import { deleteTodo, currentTodo } from '../redux/action'

export const Todo = ({ todo }) => {

    const dispatch = useDispatch();

    const { id, name } = todo;

    return (
        <li className="list-group-item">
            <div className="d-flex justify-content-between align-items-center">
                <span>{ name }</span>
                <div>
                    <button
                        className="btn btn-primary me-2"
                        onClick={ () => dispatch( currentTodo( todo ) ) }
                    >
                        <i className="fas fa-edit"></i>
                    </button>
                    <button
                        className="btn btn-danger"
                        onClick={ () => dispatch( deleteTodo( id ) ) }
                    >
                        <i className="fas fa-trash-alt"></i>
                    </button>
                </div>
            </div>
        </li>
    )
}
