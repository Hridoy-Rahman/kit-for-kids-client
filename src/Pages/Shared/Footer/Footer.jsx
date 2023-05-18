import React from 'react';
import { HiEnvelope, HiPhone, HiMapPin } from "react-icons/hi2";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className=" p-10 bg-base-200 text-base-content flex-row-reverse lg:flex lg:flex-row lg:gap-4 justify-between">
            <div className='mb-8 '>
                <img className='h-12' src="https://i.ibb.co/KLj30WC/logo.png" alt="" />
                <p>Kits For Kids<br />Providing best service</p>
                <p>Copyright © 2023 - All right reserved by <br /> Kits For Kids</p>
            </div>

            <div className='mb-8 '>
                <span className="footer-title">Contact</span>
                <p className="link link-hover flex items-center gap-2"><HiPhone></HiPhone> 017635423562</p>
                <p className="link link-hover flex items-center gap-2"><HiEnvelope></HiEnvelope> kfk@gmail.com</p>
                <p className="link link-hover flex items-center gap-2"><HiMapPin></HiMapPin>Level-4, 34, Awal Centre, Banani, Dhaka</p>
            </div>
            <div className='mb-8 '>
                <span className="footer-title">Follow us on</span>
                <div className='flex gap-6'>
                    <a className="link link-hover"><FaFacebook></FaFacebook></a>
                    <a className="link link-hover"><FaTwitter></FaTwitter></a>
                    <a className="link link-hover"><FaInstagram></FaInstagram></a>
                </div>
            </div>
            <div className='mb-8 '>
                <span className="footer-title">Legal</span>
                <div className='flex flex-col'>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;