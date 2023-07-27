import { useEffect, useState } from "react"

export const Message = () => {

    const [ coords, setCoords ] = useState({ x: 0, y: 0 });

    useEffect(() => {

        const onMouseMove = ({ x, y }) => {
            // const coords = { x, y };
            setCoords({ x, y });

        }
      
        window.addEventListener( 'mousemove', onMouseMove ); // (e) => onMouseMove(e)
    
        return () => {
            window.removeEventListener( 'mousemove', onMouseMove );
        }
    }, []);

    return (
        <>
            <h3>Usuario ya existe</h3>
            { JSON.stringify( coords ) } 
        </>
    )
    //  los objetos no se pueden imprimir, se tiene que extraer por un JSON.stringify
}

// useEffect(() => {
    //     console.log('Message Mounted'); // Mostrar al renderizarse, si se cumple la dependencia
    
    //   return () => {
    //     console.log('Message Unmounted'); // Mostrar cuando el componente se desmonta o ya no se rendeiza
    //   }
    // }, []) // dependencia: Ejecutar el cuerpo de Effect solo la primera vez que se renderiza el componente

    // const [first, setfirst] = useState(second)