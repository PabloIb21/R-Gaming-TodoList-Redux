import * as types from './actionTypes';

export const addTodo = todo => ({
    type: types.ADD_TODO,
    payload: todo
});

export const updateTodo = todo => ({
    type: types.UPDATE_TODO,
    payload: todo
});

export const deleteTodo = id => ({
    type: types.DELETE_TODO,
    payload: id
});

export const currentTodo = todo => ({
    type: types.CURRENT_TODO,
    payload: todo
});

export const cleanCurrentTodo = () => ({
    type: types.CLEAN_CURRENT_TODO
});

export const loadTodos = () => ({
    type: types.LOAD_TODOS
});