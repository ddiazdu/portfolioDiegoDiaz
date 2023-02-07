import React from 'react'

const Navegacion = () => {
    return (
        <div>
            <nav id='navegacion' className='flex justify-around items-center'>
                <h1 className='font-bold text-3xl text-gray-700'>
                    Diego <span id='apellido'>Diaz</span>
                </h1>
                <ul className='flex gap-4 justify-end m-5 text-lg'>
                    <li><a id="hover-underline-animation" href="">Inicio</a></li>
                    <li><a id="hover-underline-animation" href="#conocemeMas">Sobre mi</a></li>
                    <li><a id="hover-underline-animation" href="#portafolio">Portafolio</a></li>
                    <li><a id="hover-underline-animation" href="#contacto">Contacto</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navegacion