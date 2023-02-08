
import RoomIcon from '@mui/icons-material/Room';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import { useState, useRef } from 'react';
import Alerta from './Alerta';
import emailjs from '@emailjs/browser';


const Contact = () => {

    const form = useRef();
    const [nombre, SetNombre] = useState("");
    const [email, setEmail] = useState("");
    const [asunto, setAsunto] = useState("");
    const [mensaje, setMensaje] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault()

        if ([nombre, email, asunto, mensaje].includes('')) {

            Alerta.alertaError('Debes rellenar todos los campos')

        } else {

            emailjs.sendForm('service_mb53qz7', 'template_xsh158e', form.current, 'EGfBW1cAmuL0kS9U0')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });

            Alerta.alertaExito('Mensaje Enviado')
            limpiarCampos()

        }

    }

    const limpiarCampos = () => {

        SetNombre("");
        setEmail("");
        setAsunto("");
        setMensaje("");
    };


    return (
        <div>
            <div id='contacto' className="flex p-10 gap-10 bg-slate-300">
                <div id='contacto__child' className='text-justify w-1/2 p-10 '>
                    <h2 className='mb-5 text-center'>Datos de contacto</h2>
                    <ul className='space-y-5'>
                        <li className='text-center'><RoomIcon /> Dirección: Hualañe, Villa el mirador</li>
                        <li className='text-center'><LocalPhoneIcon /> Teléfono: 9-50685606</li>
                        <li className='text-center'><EmailIcon /> Email: diego.diazdu@gmail.com</li>
                    </ul>
                </div>

                <div id='formulario' className='w-2/5'>
                    <form ref={form} className='flex flex-col' onSubmit={handleSubmit}>
                        <legend className='mb-6 font-medium text-2xl'>
                            Contactame
                        </legend>

                        <label htmlFor="nombre">Nombre:</label>
                        <input name='user_name' value={nombre} onChange={(e) => SetNombre(e.target.value)} id="nombre" type="text" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />

                        <label htmlFor="email">Email:</label>
                        <input name='user_email' value={email} onChange={(e) => setEmail(e.target.value)} id="email" type="email" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />


                        <label htmlFor="asunto">Asunto:</label>
                        <input name='user_subject' value={asunto} onChange={(e) => setAsunto(e.target.value)} id="asunto" type="text" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />

                        <label htmlFor="mensaje">Mensaje:</label>
                        <textarea name='user_message' value={mensaje} onChange={(e) => setMensaje(e.target.value)} id="mensaje" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' ></textarea>

                        <button id='btn__send' type='submit' className='w-1/4 mt-5'>
                            <div className="svg-wrapper-1">
                                <div className="svg-wrapper">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                        <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                                    </svg>
                                </div>
                            </div>
                            <span>Enviar</span>
                        </button>

                    </form>


                </div>
            </div>
        </div>
    )
}


export default Contact
