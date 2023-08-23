const { render, screen } = require("@testing-library/react");
const { MainApp } = require("../../src/09-useContext/MainApp");
const { MemoryRouter } = require("react-router-dom");



describe('Pruebas en <MainApp/>', () => {
    
    test('debe de mostrar el HomePage', () => {

        // hay qye proveerle los hooks necesarios en este caso BrowserRouter pero para test se llama MemoryRouter

        render( 
            <MemoryRouter>
                <MainApp/> 
            </MemoryRouter>
        );
        expect( screen.getByText('HomePage') ).toBeTruthy(); // que exista el home page
        // screen.debug();

    });

    test('debe de mostrar el LoginPage', () => {

        render( 
            <MemoryRouter initialEntries={['/login']}>
                <MainApp /> 
            </MemoryRouter>
        );
        expect( screen.getByText('LoginPage') ).toBeTruthy(); // que exista el home page
        // screen.debug();

    });

});