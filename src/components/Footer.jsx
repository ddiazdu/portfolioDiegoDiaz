const Footer = () => {

    let fecha = new Date()
    let agno = fecha.getFullYear().toString()

    return (
        <div className='bg-slate-400 p-5'>
            <p className='text-white font-light text-center'> © {agno} Diego Diaz | All Rights Reserved</p>
        </div>
    )
}

export default Footer