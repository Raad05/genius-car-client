import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../../../assets/images/login/login.svg';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import { AuthContext } from '../../../contexts/AuthProvider';
import { getAuth, updateProfile } from 'firebase/auth';
import app from '../../../firebase/firebase.config';

const auth = getAuth(app);

const Signup = () => {
    const { createUser, googleSignUp, fbSignUp } = useContext(AuthContext);

    const handleSignup = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                updateUser();
                form.reset();
                console.log(user);
            })
            .catch(error => {
                console.error(error);
            });

        const updateUser = () => {
            updateProfile(auth.currentUser, {
                displayName: name
            })
                .then(() => {
                    console.log('Username updated!');
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }

    const handleGoogleSignup = () => {
        googleSignUp()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error(error);
            });
    }

    const hangleFacebookSignup = () => {
        fbSignUp()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <form onSubmit={handleSignup} className='login'>
            <div className="hero my-10">
                <div className="hero-content flex-col lg:flex-row gap-20">
                    <div className="text-center lg:text-left">
                        <img src={loginImg} alt="login-img" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-xl     bg-base-100">
                        <div className="card-body">
                            <h1 className='text-center text-3xl font-bold'>Sign Up</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                            </div>
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
                                <button className="btn btn-error text-white font-semibold" type='submit'>Sign Up</button>
                            </div>
                            <div className="form-control mt-6">
                                <p className='text-center font-semibold mb-3'>Or Sign Up with</p>
                                <div className='flex justify-center'>
                                    <button onClick={handleGoogleSignup} className='mx-3 bg-gray-200 rounded-full p-3'><FcGoogle size={20}></FcGoogle></button>
                                    <button onClick={hangleFacebookSignup} className='mx-3 bg-gray-200 rounded-full p-3 text-blue-600'><FaFacebookF size={20}></FaFacebookF></button>
                                </div>
                                <p className='text-center mt-6 text-sm text-gray-500'>Already have an account? <Link to='/login' className='text-orange-400 font-semibold'>Login</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Signup;