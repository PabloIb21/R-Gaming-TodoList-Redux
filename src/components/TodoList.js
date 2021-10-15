import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadTodos } from '../redux/action';
import { Todo } from './Todo';
import { TodoInput } from './TodoInput';

export const TodoList = () => {

    const todos = useSelector( state => state.todo.todos );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( loadTodos() );
    }, [ dispatch ])

    return (
        <div className="bg-gaming">
            <div className="app-height d-flex justify-content-center align-items-center">
                <div className="bg-secondary p-5 rounded">
                    <h1 className="text-white">Gaming TodoList</h1>

                    <TodoInput />

                    {
                        !todos || todos.length === 0 ? (
                            <div className="alert alert-secondary mb-0">
                                <p className="text-center mb-0">No games to show</p>
                            </div>
                        ) : (
                            <ul className="list-group">
                                { todos.map( todo => (
                                    <Todo key={todo.id} todo={ todo } />
                                )) }
                            </ul>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
