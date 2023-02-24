import React from 'react'

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseConfig } from '../../fb';
import { useNavigate } from 'react-router-dom';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function SignUp() {

    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const user = userCredential.user;
                console.log(user);
                
                navigate('/');
            })
            .catch((error) => {

                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage, errorCode)
            });
    }


    return (
        <>
            <div className='w-[fit-content]  bg-[#f7f5f3] mx-auto my-[7rem] items-center shadow-[0_0_0_50vmax] shadow-[#2a5b45] rounded-[30px]'>
                {
                    <div className='text-left p-8 my-4'>
                        <div className='flex items-center'>
                            <h3 className='text-2xl font-bold my-4'>Bienvenidos a Café de altura.</h3>
                        </div>
                        <p>Registrate para poder hacer pedidos del mejor café del mundo al mejor precio.</p>
                        <form onSubmit={submitHandler}>
                            <div className='my-4 flex flex-col'>
                                <label htmlFor="email">Escribe tu email:</label>
                                <input className="p-2" type="email" name="email" />
                            </div>
                            <div className='my-4 flex flex-col'>
                                <label htmlFor="password">Escribe una contraseña:</label>
                                <input className="p-2" type="password" name="password" />
                            </div>
                            <input className='my-4 px-4 py-2 pointer bg-[#2a5b45] text-white' type="submit" value="Enviar" />
                        </form>
                    </div>
                }
            </div>
        </>
    )
}