import React from 'react'
import DownloadIcon from '@mui/icons-material/Download';
import PDF from "../docs/CURRICULUM DIEGO DÍAZ DURÁN.pdf"

const Aboutme = () => {
    return (
        <div>
            <main className='p-10'>
                <div id='conocemeMas' className='text-center'>
                    <h1 className='flex flex-col items-center text-5xl'>Conóceme más
                        <div id='separador'></div>
                    </h1>
                </div>
                <div id='contenido__article' className='flex mt-10 mx-5 justify-center gap-x-20'>
                    <article className='sm:w-full lg:w-3/4 leading-8 '>
                        <h2 id='contenido__titulo' className='text-3xl lg:text-left mb-5 font-extrabold'> Soy <span id='apellido'>Diego Diaz</span>, desarrollador <span className='whitespace-pre'>front-end</span></h2>
                        <p className='text-justify mb-3'>
                            Hola, soy un joven apasionado por la tecnología y el desarrollo de sistemas.

                            Me gusta trabajar en equipo y comunicarme de manera efectiva con mis compañeros de proyecto.

                            Tengo un enfoque práctico y una mentalidad de solución de problemas que me han ayudado a resolver desafíos complejos con éxito.

                            Siempre estoy buscando nuevos desafíos y oportunidades para mejorar mis habilidades y ampliar mi conocimiento en el campo de la tecnología.
                        </p>
                        <button className='flex items-center justify-center sm:w-full lg:w-1/2 w-full h-5  mb-5 p-7 font-medium text-white bg-blue-400 hover:bg-blue-500 rounded-lg transition ease-in-out delay-75 duration-300'>

                            <a href={PDF} target="_blank" rel="noopener noreferrer" download="CURRICULUM DIEGO DÍAZ DURÁN.pdf"> <DownloadIcon /> Descarga mi CV</a>

                        </button>
                    </article>
                    <div>
                        <h3 className='text-center text-2xl font-bold'>
                            Conocimientos:
                        </h3>
                        <ul className='flex'>
                            <li className='p-10'><i className="text-orange-500 text-3xl fa-brands fa-html5"></i> </li>
                            <li className='p-10'><i className="text-sky-500 text-3xl fa-brands fa-css3-alt"></i></li>
                            <li className='p-10'><i className="text-yellow-500 text-3xl fa-brands fa-js"></i></li>
                        </ul>
                        <ul className='flex'>
                            <li className='p-10'><i className="text-orange-900 text-3xl fa-brands fa-java"></i></li>
                            <li className='p-10'><i className="text-gray-600 text-3xl fa-solid fa-database"></i></li>
                            <li className='p-10'><i className="text-orange-500 text-3xl fa-brands fa-git-alt"></i></li>
                        </ul>
                    </div>
                    <div >

                        <img className='w-100' src="../../images/juicy-man-programmer-writing-code-and-make-web-design-on-a-pc.gif" alt="" />
                    </div>

                </div>
            </main>
        </div>

    )
}

export default Aboutme