import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';


const Login = () => {

    const [passwordVisible, setPasswordVisible] = useState(false)

    const {login}=useContext(AuthContext)

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleLogIn = (event) => {
        event.preventDefault();
        const form=event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user)
        })
        .catch((error) => {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Sorry...',
                text: 'Invalid email or password',
            })
        });
    }

    return (
        <div className="hero  bg-base-200 lg:mb-12">
            <div className="hero-content  lg:w-3/4 p-6 lg:p-12">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold mb-8 text-center">Login</h1>
                        <form onSubmit={handleLogIn}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className='flex items-center'>
                                    <input
                                        type={passwordVisible ? 'text' : 'password'}
                                        name='password'
                                        placeholder='Password'
                                        className='input input-bordered'
                                    />
                                    <button
                                        type='button'
                                        onClick={togglePasswordVisibility}
                                        className='btn btn-circle btn-xs ml-2'
                                    >
                                        {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                                    </button>
                                </div>

                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='text-center my-4'>Don't Have Account? <Link className='text-orange-500 font-bold' to='/signup'>Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;