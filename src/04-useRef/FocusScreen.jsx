import { useRef } from "react"

export const FocusScreen = () => {

    const inputRef = useRef();// mantiene la referencia a algo: objetos, valores, elementos html

    const onClick = () => {
        // document.querySelector('input').select();
        // console.log(inputRef);
        inputRef.current.select();
    }

    return (
        <>
            <h1>Focus Screen</h1>
            <hr />

            <input 
                ref={ inputRef } // El inputRef va a mandar el Elemento HTML, y se lo va establecer como referencia dentro de la variable inputRef
                type="text"
                placeholder="Ingrese su nombre"
                className="form-control"
            />

            <button
                className="btn btn-primary mt-2"
                onClick={onClick}
            >
                Set focus
            </button>
        </>
    )
}
