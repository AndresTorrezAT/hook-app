import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";


export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const incrementFather = useCallback( // esto siempre apunta al mismo lugar en memoria
      () => {
        // setCounter( counter + 1 );// Esta linea se memoriza tal cual siempre que se ejecute, no cambia
        setCounter( (value) => value + 1 );// la forma de usar es con el callback del set
      },
      [],
    )
    

    // const incrementFather = () => { // cada vez que se renderiza, esta variable se vuelve a declarar en otra posicion en memoria
    //     setCounter( counter + 1 );
    // }

    return (
        <>
            <h1>useCallback Hook: { counter} </h1>
            <hr />

            <ShowIncrement increment={ incrementFather }/>
        </>
    )

    //<ShowIncrement increment={ incrementFather }/> entonces este valor siempre es diferente

}
