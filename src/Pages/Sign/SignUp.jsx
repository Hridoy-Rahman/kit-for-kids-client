import React, { useContext, useEffect, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import GoogleLogin from '../Login/GoogleLogin';
import Aos from 'aos';

const SignUp = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');
    const { registerUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    useEffect(() => {
        Aos.init();
      }, []);

    const handleSignup = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        const photo = form.photo.value;

        if (password !== confirmPassword) {
            Swal.fire({
                icon: 'error',
                title: 'Password did not match',
                text: 'The password and confirm password do not match.',
            });
            return;
        }

        registerUser(email, password, photo, name)
            .then((result) => {
                const user = result.user;
                console.log(user);
                const userObject = { email, photo, name };
                const users = JSON.parse(localStorage.getItem('users')) || [];
                users.push(userObject);
                localStorage.setItem('users', JSON.stringify(users));

                if (location.state && location.state.from) {
                    navigate(location.state.from);
                } else {
                    navigate('/');
                }
            })
            .catch((error) => {
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Sorry...',
                    text: 'Your email has already been used',
                });
            });
    };

    return (
        <div  className="hero  bg-base-200 lg:mb-12">
            <div data-aos="fade-up" className="hero-content  lg:w-3/4 p-6 lg:p-12">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold mb-8 text-center">Sign Up</h1>
                        <form onSubmit={handleSignup}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                            </div>
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


                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <div className='flex items-center'>
                                    <input
                                        type={passwordVisible ? 'text' : 'password'}
                                        name='confirmPassword'
                                        placeholder='Confirm Password'
                                        className='input input-bordered'
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                    <button
                                        type='button'
                                        onClick={togglePasswordVisibility}
                                        className='btn btn-circle btn-xs ml-2'
                                    >
                                        {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                                    </button>
                                </div>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="url" name='photo' placeholder="Photo URL" className="input input-bordered" />
                            </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className='text-center my-4'>Already Have An Account? <Link className='text-orange-500 font-bold' to='/login'>Login</Link></p>
                        <GoogleLogin></GoogleLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default SignUp;