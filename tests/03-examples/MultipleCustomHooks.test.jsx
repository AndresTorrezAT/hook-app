import { render, screen } from '@testing-library/react'
import { MultipleCustomHooks } from '../../src/03-examples';
import { useFetch } from '../../src/hooks/useFetch'; // hay que modificar la ruta a la especifica por que sino hara el morck del archivo de barril

jest.mock('../../src/hooks/useFetch'); // se simula la funcion entera y su return

describe('Pruebas en  <MultipleCustomHooks />', () => {

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

        useFetch.mockReturnValue({
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

    }); // 08
});