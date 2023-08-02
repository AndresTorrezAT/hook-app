import { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'andres@gmail.com',
    });

    const { username, email } = formState;

    const onInputChange = ({target}) => {
        // console.log(event.target.value);
        const { name, value } = target;
        setFormState({
            ...formState,// se copian todos los valores pero se remplazan por los de abajo
            [name]: value // importante para saber que input hay que modificar
        });
    }

    useEffect( () => {
        // console.log('useEffect called!');
    }, []); // la dependencia [] hace que el use effect solo se ejecute 1 vez (la primera vez que se monta "renderiza", solo esa)

    useEffect( () => {
        // console.log('formState changed!');
    }, [formState]);// se activa cuando formState cambia

    useEffect( () => {
        // console.log('email changed!');
    }, [email]);// se activa cuando email cambia

    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />

            <input 
                type="text"
                className="form-control" 
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            <input 
                type="email"
                className="form-control mt-2" 
                placeholder="andres@gmail.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            {
                (username === 'strider2') && <Message /> // solo se muestra si cambia el objeto del formState a strider2
            }
            
        </>
    )
}
