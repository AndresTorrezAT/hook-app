
import { useCounter, useFetch } from '../hooks';
import { LoadingQuote, Quote } from '../03-examples';

export const Layout = () => {

    const { counter, increment } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://rickandmortyapi.com/api/character/${counter}`);
    const { name, status, species, gender, location } = !!data && data; // si la data es diferente de vacio, mostrar "data"

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
