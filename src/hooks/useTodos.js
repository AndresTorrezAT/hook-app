import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';

// const initialState = [
//     // {
//     //     id: new Date().getTime(),
//     //     description: 'Recolectar la piedra del alma',
//     //     done: false,
//     // },
    
// ];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {
 
    
    const [ todos, dispatch ] = useReducer( todoReducer, [], init ); // ( todoReducer, initialState, init )

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify( todos ) );
    }, [todos])
    

    const handleNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch( action ); // manda la accion al reducer
    }

    const handleDeleteTodo = ( id ) => {
        
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        });
    }

    const handleToggleTodo = ( id ) => {

        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        });
    }

    return {
        todos,
        todosCount: todos.length, 
        pendingTodosCount: todos.filter( todo => !todo.done).length,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
    }
}
