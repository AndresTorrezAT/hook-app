import { render, screen } from "@testing-library/react";
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

        const liElement = screen.getByRole('listitem');
        expect( liElement.className ).toBe('list-group-item d-flex justify-content-between');

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('align-self-center');
        expect(spanElement.className).not.toContain('text-decoration-line-through');      

    });

});