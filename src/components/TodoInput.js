import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, updateTodo, cleanCurrentTodo } from '../redux/action';

export const TodoInput = () => {

    const [ game, setGame ] = useState('');
    const [ error, setError ] = useState('');

    const dispatch = useDispatch();

    const currentTodo = useSelector( state => state.todo.currentTodo );

    useEffect(() => {
        if ( currentTodo ) {
            setGame( currentTodo.name )
        }
    }, [ currentTodo ]);

    const handleSubmit = e => {
        e.preventDefault();

        if ( game.length <= 0 ) {
            setError('Please enter a game');
            return;
        }

        if( currentTodo ) {
            dispatch( updateTodo({
                id: currentTodo.id,
                name: game
            }));
        } else {
            dispatch( addTodo({ 
                id: Date.now(), 
                name: game
            }));
        }

        setError('')
        setGame('');
        dispatch( cleanCurrentTodo() );
    }

    return (
        <form
            className="mb-4"
            onSubmit={ handleSubmit }
        >  
            {
                currentTodo 
                    ? (
                        <div className="input-group">
                            <input 
                                className="form-control"
                                type="text"
                                value={ game }
                                onChange={ e => setGame( e.target.value ) }
                            />
                            <button
                                className="btn btn-dark"
                                type="submit"
                            >
                                <i className="fas fa-pen"></i>
                            </button>
                        </div>
                    )
                : (
                    <div className="input-group">
                        <input 
                            className="form-control"
                            type="text"
                            placeholder="Game"
                            value={ game }
                            onChange={ e => setGame( e.target.value ) }
                        />
                        <button
                            className="btn btn-dark"
                            type="submit"
                        >
                            <i className="fas fa-plus"></i>
                        </button>
                    </div>
                    
                )
            }

            {
                error 
                    && 
                        <div className="mt-3 alert alert-secondary">
                            <p className="text-center mb-0">{ error }</p>
                        </div>

            }
            
        </form>
    )
}
