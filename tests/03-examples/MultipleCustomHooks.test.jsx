import { fireEvent, render, screen } from '@testing-library/react'
import { MultipleCustomHooks } from '../../src/03-examples';
import { useCounter } from '../../src/hooks/useCounter';
import { useFetch } from '../../src/hooks/useFetch'; // hay que modificar la ruta a la especifica por que sino hara el morck del archivo de barril

jest.mock('../../src/hooks/useFetch'); // se simula la funcion entera y su return
jest.mock('../../src/hooks/useCounter'); //! CREAR UN MOCK DE UNA FUNCION, ESE MOCK AFECTARA EN TODO EL CODIGO Y FUNCIONES QUE LO UTILIZEN

describe('Pruebas en  <MultipleCustomHooks />', () => {

    const mockIncrement = jest.fn(); // se crea algo asi como una funcion ficticia, que puede ser monitoreada cuando se llama y demas

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach( () => { // antes de cada prueba se hara un reset en lass funciones de mocks ,"asi se ejecuta por primera vez con los valores iniciales en cada prueba"
        jest.clearAllMocks();
    });

    test('debe de mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null,
        });

        render( <MultipleCustomHooks /> );
        // screen.debug();
        expect( screen.getByText('Loading...') );
        expect( screen.getByText('BreakingBad Quotes') );
    
        const nextButton = screen.getByRole('button', { name: 'Next quote'});
        expect(nextButton.disabled).toBeTruthy();
    });

    test('debe de mostrar un Quote', () => {

        useFetch.mockReturnValue({ // simula el return de la funcion
            data: { status: 'Vivo', name: 'Andres', species: 'Humano', gender: 'Hombre' },
            isLoading: false,
            hasError: null,
        });

        render( <MultipleCustomHooks /> );
        expect( screen.getByText('estado: Vivo') ).toBeTruthy();
        expect( screen.getByText('especie: Humano') ).toBeTruthy();
        expect( screen.getByText('genero: Hombre') ).toBeTruthy();
        expect( screen.getByText('Andres') ).toBeTruthy();
        // screen.debug();

        const nextButton = screen.getByRole('button', { name: 'Next quote'});
        expect(nextButton.disabled).toBeFalsy();

    });

    test('debe de llamar la funcion incrementar', () => { // por este test se utilizo el mock del useCounter

        useFetch.mockReturnValue({
            data: { status: 'Vivo', name: 'Andres', species: 'Humano', gender: 'Hombre' },
            isLoading: false,
            hasError: null,
        });

        render( <MultipleCustomHooks /> );
        const nextButton = screen.getByRole('button', { name: 'Next quote'});
        
        //hacemos click en el boton
        fireEvent.click( nextButton );

        // comprobamos si se llamo la funcion
        expect( mockIncrement ).toHaveBeenCalled();
       
    });
});