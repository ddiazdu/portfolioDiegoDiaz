import React from 'react'

const Portafolio = () => {
    return (
        <div id='portafolio' className='p-20'>
            <h2 id='contenido__titulo' className='text-3xl text-center mb-10 font-extrabold'> Mira algunos de mis proyectos </h2>

            <div className='flex gap-5 flex-col items-center md:flex-row'>

                <div id='proyectos__contenedor' className='w-2/4'><img id='proyectos__img' src="../../images/Screenshot_1.png" alt="" />
                    <div id='proyectos__middle'>
                        <p id='proyectos__text' className='cursor-pointer'><a target="_blank" href="https://rickmorty98.netlify.app/">Consumiendo la API de rick y morty</a></p>
                    </div>
                </div>
                <div id='proyectos__contenedor' className='w-2/4'><img id='proyectos__img' src="../../images/Screenshot_2.png" alt="" />
                    <div id='proyectos__middle'>
                        <p id='proyectos__text' className='cursor-pointer'><a target="_blank" href="https://pokeapi98.netlify.app/">Construyendo una Pokedex con PokeAPI</a></p>
                    </div>
                </div>
                <div id='proyectos__contenedor' className='w-2/4'><img id='proyectos__img' src="../../images/Screenshot_3.png" alt="" />
                    <div id='proyectos__middle' className='cursor-pointer'>
                        <p id='proyectos__text'><a target="_blank" href="https://citasreact98.netlify.app/">App construida en react para el curso React: La guia completa</a></p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Portafolio