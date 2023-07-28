import { useCounter } from '../hooks/useCounter';
import { useFetch } from '../hooks/useFetch';


export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);

    const { data, isLoading, hasError } = useFetch(`https://rickandmortyapi.com/api/character/${counter}`);

    const { name, status } = !!data && data; // si la data es diferente de vacio, mostrar "data"

    // !null = true, !!null = false -> significa que si la data es null o undefined con las dobles (!!) se convierte en false y se desestructura la data


    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                isLoading
                    ?(
                        <div className='alert alert-info text-center'>
                            Loading...
                        </div>
                    )
                    :(
                        <blockquote className='blockquote text-end'>
                            <p className='mb-1'>{ status }</p>
                            <footer className='blockquote-footer'>{ name }</footer>
                        </blockquote>
                    )
            }

            <button 
                className='btn btn-primary' 
                disabled={ isLoading }
                onClick={ () => { increment() }}>
                Next quote
            </button>

        </>
    )
}
