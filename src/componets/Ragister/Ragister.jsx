import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import auth from '../firebase/firebase.config';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();
        console.log('Form submitting...');
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.checked;
        console.log({ email, password, accepted });

        // Reset messages
        setRegisterError('');
        setSuccess('');

        // Validation
        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters.');
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password should have at least one uppercase letter.');
            return;
        }
        if (!accepted) {
            setRegisterError('Please accept our terms and conditions.');
            return;
        }

        // Create new user
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);
                setSuccess('User created successfully!');
            })
            .catch((error) => {
                console.error(error);
                setRegisterError(error.message);
            });
    };

    return (
        <div>
            <div className="m-auto w-1/2">
                <h2 className="text-3xl font-bold mb-4">Please Register</h2>
                <form onSubmit={handleRegister}>
                    <input
                        className="w-3/4 mb-4 py-2 px-4 border-2 outline-none border-black border-double"
                        placeholder="Email Address"
                        type="email"
                        name="email"
                        required
                    />
                    <br />
                    <div className="relative w-3/4">
                        <input
                            className="w-full mb-4 py-2 px-4 pr-10 border-2 outline-none border-black border-double"
                            placeholder="Password"
                            type={showPassword ? "text" : "password"}
                            name="password"
                            required
                        />
                        <span
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-5 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-600"
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                    <div className="mb-4">
                        <input type="checkbox" name="terms" id="terms" />
                        <label htmlFor="terms" className="m-2">
                            Accept our <a href="#">Terms and Conditions</a>
                        </label>
                    </div>
                    <input className="btn btn-secondary w-3/4" type="submit" value="Register" />
                </form>
                {registerError && <p className="text-red-400 mt-4">{registerError}</p>}
                {success && <p className="text-green-500 mt-4">{success}</p>}

            </div>
        </div>
    );
};

export default Register;
