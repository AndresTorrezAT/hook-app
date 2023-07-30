import { useMemo, useState } from "react";
import { useCounter } from "../hooks"

const heavyStuff = ( iterationNumber = 100 ) => {
    for ( let i = 0; i < iterationNumber; i++ ) {
        console.log('Ahi vamos...');
    }

    return `${ iterationNumber } iteracion realizadas`;
}

export const MemoHook = () => {

    const { counter, increment } = useCounter(4000);
    const [ show, setShow ] = useState(true) // los state hacen que se renderice otra vez el componente html

    const memorizedValue = useMemo(() => heavyStuff(counter), [counter]) // useMemo, memoriza el counter cada vez que lo renderiza, si la dependencia [] no cambia, la funcion no se ejecutara

    return (
        <>
            <h1>Counter: <small>{counter}</small> </h1>
            <hr />

            <h4>{ memorizedValue }</h4>

            <button
                className="btn btn-primary"
                onClick={ () =>increment()  } // onClick={ increment }  <--> (event) => increment(event) // son iguales ambos, por ese motivo no podemos enviar asi, no queremos enviar un evento como argumento
            >
            +1
            </button>

            <button
                className="btn btn-outline-primary"
                onClick={ () => setShow( !show ) }
            >
                Show/Hide { JSON.stringify(show)}
            </button>
        </>
    )
}
