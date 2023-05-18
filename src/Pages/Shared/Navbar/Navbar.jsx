import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 mt-12 mb-12">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link>Home</Link></li>
                        <li><Link>All Toys</Link></li>
                        <li><Link>Blog</Link></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <Link><img className='h-12' src="https://i.ibb.co/KLj30WC/logo.png" alt="" /></Link>
            </div>
            <div className="navbar-end">
                <button className="btn btn-info">Login</button>
            </div>
        </div>
    );
};

export default Navbar;