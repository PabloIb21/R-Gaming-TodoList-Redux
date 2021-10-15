import * as types from './actionTypes';

const initialState = {
    todos: [
        { id: 1, name: 'Call of Duty' },
        { id: 2, name: 'Battlefield' },
        { id: 3, name: 'Apex' }
    ],
    currentTodo: null
}

export const todoReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        case types.ADD_TODO:
            localStorage.setItem('todos', JSON.stringify([ ...state.todos, action.payload ]));
            return {
                ...state,
                todos: [ ...state.todos, action.payload ]
            }

        case types.UPDATE_TODO:
            localStorage.setItem('todos', JSON.stringify(state.todos.map( 
                todo => ( todo.id === action.payload.id ) ? action.payload : todo
            )));
            return {
                ...state,
                todos: state.todos.map( 
                    todo => ( todo.id === action.payload.id ) ? action.payload : todo
                )
            }

        case types.DELETE_TODO:
            localStorage.setItem('todos', JSON.stringify(state.todos.filter( todo => todo.id !== action.payload )));
            return {
                ...state,
                todos: state.todos.filter( todo => todo.id !== action.payload )
            }

        case types.CURRENT_TODO:
            return {
                ...state,
                currentTodo: action.payload
            }

        case types.CLEAN_CURRENT_TODO:
            return {
                ...state,
                currentTodo: null
            }
        
        case types.LOAD_TODOS:
            return {
                ...state,
                todos: JSON.parse(localStorage.getItem('todos')) || state.todos
            }
    
        default:
            return state;
    }

} 