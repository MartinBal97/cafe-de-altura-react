import React from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

export default function SignIn() {

    const navigate = useNavigate()
    const auth = getAuth();

    const submitHandler = (e) => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                //setIsLogged(true)
                // ...
                navigate('/');

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage, errorCode)
                // ..
            });
    }

    return (
        <>
            <div className='w-[fit-content]  bg-[#f7f5f3] mx-auto my-[7rem] items-center shadow-[0_0_0_50vmax] shadow-[#2a5b45] rounded-[30px]'>
                {
                    <div className='text-left p-8 my-4 w-[600px]'>
                        <div className='flex items-center'>
                            <h3 className='text-2xl font-bold my-4'>Hola de nuevo !</h3>
                        </div>
                        <p>Nos alegra tenerte otra vez con nosostros.</p>
                        <form onSubmit={submitHandler}>
                            <div className='my-4 flex flex-col'>
                                <label htmlFor="email">Escribe tu email:</label>
                                <input className="p-2" type="email" name="email" />
                            </div>
                            <div className='my-4 flex flex-col'>
                                <label htmlFor="password">Escribe una contraseña:</label>
                                <input className="p-2" type="password" name="password" />
                            </div>
                            <input className='my-4 px-4 py-2 bg-[#2a5b45] text-white' type="submit" value="Enviar" />
                        </form>
                    </div>
                }
            </div>
        </>
    )
}
