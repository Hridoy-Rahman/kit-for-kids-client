import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Products from '../Products/Products';

import Features from '../Feature/Features';
import PhotoGallery from '../PhotoGallery/PhotoGallery';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <About></About>
            <Products></Products>
            <PhotoGallery></PhotoGallery>
            
        </div>
    );
};

export default Home;