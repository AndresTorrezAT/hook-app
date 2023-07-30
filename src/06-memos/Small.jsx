import React from 'react';
// import { memo } from "react";


export const Small = React.memo(({value}) => { //EL memo hace que el componente no se renderice si el prop value no cambia... en otras palabras si elcomponente padre se renderiza pero este componente no cambia en nada, no se volvera a renderizar

    console.log("Me renderize :(");

    return (
        <small>{ value }</small>
    )
})
