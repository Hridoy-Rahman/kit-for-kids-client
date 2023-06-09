import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import Aos from 'aos';

const Navbar = () => {
    const { user, logOut, signedUser } = useContext(AuthContext);
    const [hovered, setHovered] = useState(false);

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch((error) => console.log(error));
    };

    const options = (
        <>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/alltoy">All Toys</Link>
            </li>
            <li>
                <Link to="/blogs">Blog</Link>
            </li>
            {user?.email ? (
                <>
                    <li>
                        <Link to="/addatoy">Add a Toy</Link>
                    </li>
                    <li>
                        <Link to={`/mytoys/${user.user_email}`}>My Toys</Link>
                    </li>
                    <li>
                        <button onClick={handleLogout}>Log Out</button>
                    </li>
                </>
            ) : (
                <li>
                    <Link to="/login">Login</Link>
                </li>
            )}
        </>
    );

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div data-aos="zoom-in" className="navbar bg-base-100 mb-12 p-4 items-center relative z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {options}
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl">
                    <img className="h-12 w-12 rounded-lg" src="https://i.ibb.co/KLj30WC/logo.png" alt="" />
                    <p>Kits For Kids</p>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{options}</ul>
            </div>
            <div className="navbar-end">
                {user?.email ? (
                    <>
                        <button
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                        >
                            {signedUser?.photo ? (
                                hovered ? (
                                    <>
                                        <img
                                            className="h-8 w-8 rounded-full"
                                            src={signedUser.photo}
                                            alt={signedUser.name}
                                        />
                                        <div className="tooltip">{signedUser.name}</div>
                                    </>
                                ) : (
                                    <img
                                        className="h-8 w-8 rounded-full"
                                        src={signedUser.photo}
                                        alt={signedUser.name}
                                    />
                                )
                            ) : (
                                <img
                                    className="h-8 w-8 rounded-full"
                                    src="https://i.ibb.co/Q69zGY7/profile-Logo.png"
                                    alt=""
                                />
                            )}
                        </button>
                    </>
                ) : (
                    <Link to="/signup">Sign Up</Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;
