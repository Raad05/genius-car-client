import React from 'react';
import loginImg from '../../../assets/images/login/login.svg';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }

    return (
        <form onSubmit={handleLogin} className='login'>
            <div className="hero my-10">
                <div className="hero-content flex-col lg:flex-row gap-20">
                    <div className="text-center lg:text-left">
                        <img src={loginImg} alt="login-img" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-xl     bg-base-100">
                        <div className="card-body">
                            <h1 className='text-center text-3xl font-bold'>Login</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Your Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Your Password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-error text-white font-semibold" type='submit'>Sign in</button>
                            </div>
                            <div className="form-control mt-6">
                                <p className='text-center font-semibold mb-3'>Or Sign In with</p>
                                <div className='flex justify-center'>
                                    <button className='mx-3 bg-gray-200 rounded-full p-3'><FcGoogle size={20}></FcGoogle></button>
                                    <button className='mx-3 bg-gray-200 rounded-full p-3 text-blue-600'><FaFacebookF size={20}></FaFacebookF></button>
                                    <button className='mx-3 bg-gray-200 rounded-full p-3 text-blue-500'><FaLinkedinIn size={20}></FaLinkedinIn></button>
                                </div>
                                <p className='text-center mt-6 text-sm text-gray-500'>New to Genius Car? <Link to='/signup' className='text-orange-400 font-semibold'>Sign Up</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Login;