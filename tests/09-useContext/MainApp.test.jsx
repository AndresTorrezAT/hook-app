const { render, screen } = require("@testing-library/react");
const { MainApp } = require("../../src/09-useContext/MainApp");
const { MemoryRouter } = require("react-router-dom");



describe('Pruebas en <MainApp/>', () => {
    
    test('debe de mostrar el HomePage', () => {

        render( 
            <MemoryRouter>
                <MainApp/> 
            </MemoryRouter>
        );
        expect( screen.getByText('HomePage') ).toBeTruthy();
        screen.debug();

    });
});