import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const emailRef = useRef(null);

    // Handle login
    const handleLogin = (e) => {
        e.preventDefault();

        // Get email and password
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password);

        // Clear previous messages
        setRegisterError('');
        setSuccess('');

        // Firebase login
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);
                setSuccess('User logged in successfully!');
            })
            .catch((error) => {
                console.error(error);
                setRegisterError("Plaese Ragister");
            });
    };

    // Handle forget password
    const handleForgetPassword = () => {
        const email = emailRef.current.value;
        if (!email) {
            console.log('Please provide an email');
            return;
        }
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            console.log('Please provide a valid email address');
            return;
        }

        // send validate email

        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert('please chack your email')
            })
            .catch(error => {
                console.log(error);

            })
    };

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body" onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="email"
                                    ref={emailRef}
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                    required
                                />
                                <label className="label">
                                    <a href="#" onClick={handleForgetPassword} className="label-text-alt link link-hover">
                                        Forgot password?
                                    </a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">
                                    Login
                                </button>
                            </div>
                        </form>
                        <div className="pl-5">
                            {registerError && <p className="text-red-400 mt-4">{registerError}</p>}
                            {success && <p className="text-green-500 mt-4">{success}</p>}

                        </div>
                        <p className="m-5">
                            New to this website? Please{' '}
                            <Link to={'/Ragister'} className="text-green-500">
                                Register
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
