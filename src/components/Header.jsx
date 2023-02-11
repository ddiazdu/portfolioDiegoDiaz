
import Navegacion from "./Navegacion"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Typewriter } from 'react-simple-typewriter'

const Header = () => {
    return (
        <div>
            <Navegacion />

            <div id='header' className='mx-auto p-5 rounded-md flex justify-center lg:gap-x-32 items-center'>
                <div className="">
                    <img className="rounded-full" id='pictureHeader' src="../../images/toonmecom_938a22-removebg-preview (1).png" alt="" />
                </div>
                <div id="nombreHeader" className="flex justify-center p-10">
                    <p className='text-5xl font-bold uppercase text-white mb-2'>
                        Hola!, soy Diego
                    </p>
                    <span className="flex justify-center p-3 text-lg cursor-pointer font-normal text-white">


                        <Typewriter

                            words={['Programador', 'Front-end', 'Aprendizaje continuo', 'Trabajo en equipo']}
                            loop={4}
                            cursor
                            cursorStyle='|'
                            typeSpeed={70}
                            deleteSpeed={100}
                            delaySpeed={1000}

                        />

                    </span>

                    <div id="socialButtons">
                        <ul className="flex justify-center gap-2 mt-2 text-gray-400">
                            <li className="bg-white p-3 rounded-full"><a href="https://www.linkedin.com/in/diegodiazdu/" target="_blank"><LinkedInIcon id='icon_social' fontSize="large" /></a></li>
                            <li className="bg-white p-3 rounded-full"><a href="https://github.com/ddiazdu" target="_blank"><GitHubIcon id='icon_social' fontSize="large" /></a></li>
                            <li className="bg-white p-3 rounded-full"><a href="https://www.facebook.com/diegodiazdu" target="_blank"><FacebookIcon id='icon_social' fontSize="large" /></a></li>
                            <li className="bg-white p-3 rounded-full"><a href="https://www.instagram.com/diegodiazdu/" target="_blank"><InstagramIcon id='icon_social' fontSize="large" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header