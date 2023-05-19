import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import FeatureProduct from '../FeatureProduct/FeatureProduct';
import Products from '../Products/Products';
import PhotoGallery from '../PhotoGallery/PhotoGallery';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <PhotoGallery></PhotoGallery>
            <FeatureProduct></FeatureProduct>
            <Products></Products>
        </div>
    );
};

export default Home;