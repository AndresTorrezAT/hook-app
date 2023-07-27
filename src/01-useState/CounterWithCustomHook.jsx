import { useCounter } from '../hooks/useCounter';

export const CounterWithCustomHook = () => {

    const { counter, increment, decrement, reset } = useCounter(); // basicamente se encapsula la logica dentro de un custom hook con ayuda de un hook de react

    return (
        <>
            <h1>Counter with Hook: { counter }</h1>
            <hr />

            <button onClick={ () => increment(2) } className="btn btn-primary">+1</button> 
            <button onClick={ reset } className="btn btn-primary">Reset</button>
            <button onClick={ () => decrement(2) } className="btn btn-primary">-1</button>

        </>
    )

    // por defecto onClick envia el evento del click (event) => increment(event)
}
