import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Products from '../Products/Products';
// import PhotoGallery from '../PhotoGallery/PhotoGallery';
import Gallery from '../PhotoGallery/PhotoGallery';
import Features from '../Feature/Features';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Features></Features>
            <Products></Products>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;