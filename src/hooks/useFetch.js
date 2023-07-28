import { useEffect, useState } from "react"


export const useFetch = (url) => {

    // La primera vez que un componente se monta el useState se establece con los valores de entrada

    const [state, setState] = useState({ 
        data:null, 
        isLoading:true, // Se establece cuando se monta
        hasError:null,  
    })

    const getFetch = async() => {

        setState({
            ...state, 
            isLoading: true, // se establece cuando cambia el url
        });

        const resp = await fetch(url);
        const data = await resp.json();

        setState({ 
            data, 
            isLoading: false, // se establece cuando se obtiene la data
            hasError: null,
        });
    }

    useEffect(() => { // internamente no puede tener funciones async por que devolveria una promesa y luego seria dificil limpiar
        getFetch(); // por eso llama mejor una funcion pero dentro de la funcion hay un async
    }, [url])
    
    return {
        data: state.data, 
        isLoading: state.isLoading,
        hasError: state.hasError, 
    };
}
