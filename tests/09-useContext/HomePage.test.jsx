import { render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { HomePage } from "../../src/09-useContext/HomePage";


describe('Pruebas en el <HomePage />', () => { 

    const user = {
        id: 1,
        name: 'Fernando',
    }

    test('debe de mostrar el componente SIN el usuario', () => {
        // UserContext.Provider - hay que darle un contexto por que en test no tiene acceso a este
        render( 
            <UserContext.Provider value={{ user: null }}>
                <HomePage />
            </UserContext.Provider>
        );

        // screen.debug();

        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toBe( 'null' ); // null en consola, pero en pantalla espacio vacio

    });

    test('debe de mostrar el componente CON el usuario', () => {
        
        render( 
            <UserContext.Provider value={{ user: user }}>
                <HomePage />
            </UserContext.Provider>
        );

        screen.debug();

        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toContain( user.name );
        expect( preTag.innerHTML ).toContain( user.id.toString() ); // `${user.id}` otra forma
    });

});