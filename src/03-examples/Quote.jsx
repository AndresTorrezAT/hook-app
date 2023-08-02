import { useLayoutEffect, useRef, useState } from "react"


export const Quote = ({ status, name, species, gender, location }) => {

  const pRef = useRef() // Guarda la referencia de algo, es como un ID
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })

  useLayoutEffect(() => { // se ejecuta despues de que todo se renderiza, despues del ultimo se ejecuta
    // console.log( pRef.current.getBoundingClientRect() );
    const { width, height } = pRef.current.getBoundingClientRect();
    setBoxSize({ width, height });
  }, [])

  return (

    <>
      <blockquote className='blockquote text-end' style={{ display: 'flex'}}> 
          <p className='mb-1'>estado: { status }</p>
          <p className='mb-1' ref={ pRef }>especie: { species }</p> 
          <p className='mb-1'>genero: { gender }</p>
          <p className='mb-1'>localizacion: { location.name }</p>
          <footer className='blockquote-footer mt-2'>{ name }</footer>
      </blockquote>

      <code>{JSON.stringify(boxSize)}</code>
    </>


  )
}

//style={{ display: 'flex'}} -> las {{}} hacen que sea mas facil escribir styles luego lo combierte
// a style=" display:'flex' " de html de toda la vida

// para probar eñ 03-examples eliminar el style completo