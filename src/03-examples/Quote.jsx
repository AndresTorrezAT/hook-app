

export const Quote = ({ status, name }) => {

  return (

    <blockquote className='blockquote text-end'>
        <p className='mb-1'>{ status }</p>
        <footer className='blockquote-footer'>{ name }</footer>
    </blockquote>

  )
}
