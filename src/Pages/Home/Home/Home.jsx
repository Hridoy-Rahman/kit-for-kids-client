import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import FeatureProduct from '../FeatureProduct/FeatureProduct';
import Products from '../Products/Products';
import ShopByCategory from '../ShopByCategory/ShopByCategory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <FeatureProduct></FeatureProduct>
            <Products></Products>
        </div>
    );
};

export default Home;