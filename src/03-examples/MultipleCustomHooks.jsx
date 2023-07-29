
import { useCounter, useFetch } from '../hooks';
import { LoadingQuote, Quote } from './';

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);

    const { data, isLoading, hasError } = useFetch(`https://rickandmortyapi.com/api/character/${counter}`);

    const { name, status, species, gender, location } = !!data && data; // si la data es diferente de vacio, mostrar "data"

    // !null = true, !!null = false -> significa que si la data es null o undefined con las dobles (!!) se convierte en false y se desestructura la data

    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                isLoading
                    ? <LoadingQuote />
                    : <Quote status={ status } name={ name } species={ species } gender={ gender } location={ location }/>    
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
