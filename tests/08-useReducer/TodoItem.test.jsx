import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";


describe('Pruebas en <TodoItem />', () => {

    const todo = {
        id: 1,
        description: 'Piedra del Alma',
        done: false,
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach( () => jest.clearAllMocks() ); //en cada una de las pruebas se van a resetear cada una de la funciones, y estaran como si fueran recien creadas

    test('debe de mostrar el Todo Pendiente de completar', () => {

        render( 
            <TodoItem 
                todo={ todo } 
                onToggleTodo={ onToggleTodoMock } 
                onDeleteTodo={ onDeleteTodoMock } 
            /> 
        );
        // Debe tener esa clase
        const liElement = screen.getByRole('listitem');
        expect( liElement.className ).toBe('list-group-item d-flex justify-content-between');

        // Debe contener esa clase
        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('align-self-center');
        expect(spanElement.className).not.toContain('text-decoration-line-through');      

    });

    test('debe de mostrar el Todo completado', () => {

        todo.done = true;

        render( 
            <TodoItem 
                todo={ todo } 
                onToggleTodo={ onToggleTodoMock } 
                onDeleteTodo={ onDeleteTodoMock } 
            /> 
        );

        // Debe contener la clase que lo marca con una linea
        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('text-decoration-line-through');      

    });

    test('span debe de llamar el ToggleTodo cuando se hace click', () => {

        render( 
            <TodoItem 
                todo={ todo } 
                onToggleTodo={ onToggleTodoMock } 
                onDeleteTodo={ onDeleteTodoMock } 
            /> 
        );

        const spanElement = screen.getByLabelText('span');
        fireEvent.click( spanElement ); 

        expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id ); // la funcion debe ser llamada con ese argumento

    });

    test('button debe de llamar el deleteTodo', () => {

        render( 
            <TodoItem 
                todo={ todo } 
                onToggleTodo={ onToggleTodoMock } 
                onDeleteTodo={ onDeleteTodoMock } 
            /> 
        );
            // FORMA 1 - cuando hay varios bonotes
        // const buttonElement = screen.getByLabelText('button');
        // fireEvent.click( buttonElement ); 
            // FORMA 2
        const deleteButton = screen.getByRole('button');
        fireEvent.click( deleteButton ); 

        expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id ); // la funcion debe ser llamada con ese argumento

    });

});