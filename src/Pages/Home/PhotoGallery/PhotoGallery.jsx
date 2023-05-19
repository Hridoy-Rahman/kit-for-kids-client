import React from 'react';
import { Link } from 'react-router-dom';

const PhotoGallery = () => {
    return (
        <div>
            <h2 className='text-2xl font-bold lg:text-5xl text-center text-orange-500 mb-8'>Our Photo Gallery</h2>
            <div className='border boder-2 border-orange-300 rounded-3xl p-8 flex flex-wrap gap-2'>
                <Link><img className='h-48 w-48 p-2' src="https://i.ibb.co/cvYD36c/1.jpg" alt="" /></Link>
                <Link><img className='h-52 w-52' src="https://i.ibb.co/GCH8P3H/4.jpg" alt="" /></Link>
                <Link><img className='h-44 w-44' src="https://i.ibb.co/hmP85Cv/5.jpg" alt="" /></Link>
                <Link><img className='h-48 w-48' src="https://i.ibb.co/qr5XYbx/7.jpg" alt="" /></Link>
                <Link><img className='h-52 w-52' src="https://i.ibb.co/HH8szwH/8.jpg" alt="" /></Link>
                <Link><img className='h-48 w-48' src="https://i.ibb.co/80Z33rZ/11.jpg" alt="" /></Link>
                <Link><img className='h-44 w-44' src="https://i.ibb.co/gjqwYqJ/12.jpg" alt="" /></Link>
                <Link><img className='h-52 w-52' src="https://i.ibb.co/4FMjMWt/14.jpg" alt="" /></Link>
                <Link><img className='h-48 w-48' src="https://i.ibb.co/cbCfdxy/15.jpg" alt="" /></Link>
                <Link><img className='h-56 w-56' src="https://i.ibb.co/KW9dMp0/23.jpg" alt="" /></Link>
                <Link><img className='h-44 w-44' src="https://i.ibb.co/zGG8bm6/21.jpg" alt="" /></Link>
                <Link><img className='h-40 w-40' src="https://i.ibb.co/gJcgG5t/19.jpg" alt="" /></Link>
                <Link><img className='h-52 w-52' src="https://i.ibb.co/K59T9Lc/27.jpg" alt="" /></Link>
                <Link><img className='h-48 w-48' src="https://i.ibb.co/GFHKMB2/30.jpg" alt="" /></Link>
                <Link><img className='h-44 w-44' src="https://i.ibb.co/r470gcc/34.jpg" alt="" /></Link>
                <Link><img className='h-48 w-48 p-2' src="https://i.ibb.co/cvYD36c/1.jpg" alt="" /></Link>
                <Link><img className='h-52 w-52' src="https://i.ibb.co/GCH8P3H/4.jpg" alt="" /></Link>
                <Link><img className='h-44 w-44' src="https://i.ibb.co/hmP85Cv/5.jpg" alt="" /></Link>
                
            </div>
        </div>
    );
};

export default PhotoGallery;