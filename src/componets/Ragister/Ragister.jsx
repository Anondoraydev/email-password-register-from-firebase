import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import auth from '../firebase/firebase.config';

const Ragister = () => {
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');

    const heandelRegistar = e => {
        e.preventDefault();
        console.log('from sbmiting');
        const email = e.target.email.value;
        const password = e.target.password.value
        console.log(password, email);

          // reset error

          setRegisterError('')
          setSuccess('')

        // password error

        if (password.length < 6) {
            setRegisterError(' Password should be at least 6 characters');
            return;
        }

        // reset error

        setRegisterError('')
        setSuccess('')

        //create new user

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setSuccess('User created Successfully')

            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message)

            })
    }
    return (
        <div>
            <div className='m-auto w-1/2'>
                <h2 className='text-3xl font-bold mb-4'>Please Register</h2>
                <form onSubmit={heandelRegistar}>
                    <input className='w-3/4 mb-4 py-2 px-4 border-2 outline-none border-black border-double' placeholder='Email Address' type="email" name="email" id="" required />
                    <br />
                    <input className='w-3/4 mb-4 py-2 px-4 border-2 outline-none border-black border-double' placeholder='Password' type="password" name="password" id="" required />
                    <br />
                    <input className='btn btn-secondary w-3/4' type="submit" value="Register" />
                </form>
                {
                    registerError && <p className='text-red-400'>{registerError}</p>
                }
                {
                    success && <p className='text-green-500'>{success}</p>
                }
            </div>
        </div>
    );
};

export default Ragister;