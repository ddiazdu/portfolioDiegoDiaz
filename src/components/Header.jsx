
import Navegacion from "./Navegacion"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
/* import TypeWriterEffect from 'react-typewriter-effect' */

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
                    <span className="flex justify-center p-3 text-normal cursor-pointer font-light text-white">

                       {/*  <TypeWriterEffect
                            startDelay={1000}
                            cursorColor="#3F3D56"
                            multiText={[
                                'Programador',
                                'Analista de sistemas',
                                'Aprendizaje continuo',
                                'Trabajo en equipo',

                            ]}
                            multiTextLoop={true}
                            multiTextDelay={1000}
                            typeSpeed={100}
                        /> */}

                    </span>

                    <div id="socialButtons">
                        <ul className="flex justify-center gap-2 mt-2 text-gray-400">
                            <li className="bg-white p-3 rounded-full"><a href=""><LinkedInIcon id='icon_social' fontSize="large" /></a></li>
                            <li className="bg-white p-3 rounded-full"><a href=""><GitHubIcon id='icon_social' fontSize="large" /></a></li>
                            <li className="bg-white p-3 rounded-full"><a href=""><FacebookIcon id='icon_social' fontSize="large" /></a></li>
                            <li className="bg-white p-3 rounded-full"><a href=""><InstagramIcon id='icon_social' fontSize="large" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header