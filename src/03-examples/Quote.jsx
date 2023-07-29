

export const Quote = ({ status, name, species, gender, location }) => {

  return (

    <blockquote className='blockquote text-end'>
        <p className='mb-1'>estado: { status }</p>
        <p className='mb-1'>especie: { species }</p>
        <p className='mb-1'>genero: { gender }</p>
        <p className='mb-1'>localizacion: { location.name }</p>
        <footer className='blockquote-footer mt-2'>{ name }</footer>
    </blockquote>

  )
}
