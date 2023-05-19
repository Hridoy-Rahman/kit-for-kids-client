import React, { useEffect, useState } from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ProductCard from './ProductCard';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    const educationalToys = products.filter((product) => product.category === 'Educational');
    const engineeringToys = educationalToys.filter((product) => product.sub_category === 'Engineering Toys');
    // console.log(engineeringToys.length)
    const mathToys = educationalToys.filter((product) => product.sub_category === 'Math Toys');
    const scienceToys = educationalToys.filter((product) => product.sub_category === 'Science Toys');
    const languageToys = educationalToys.filter((product) => product.sub_category === 'Language Toys');

    const toyCars = products.filter((product) => product.category === 'Toy Cars');
    const sportsCars = toyCars.filter((product) => product.sub_category === 'Sports Car');
    const regularCars = toyCars.filter((product) => product.sub_category === 'Regular Car');
    const trucks = toyCars.filter((product) => product.sub_category === 'Truck');

    const actionFigures = products.filter((product) => product.category === 'Action Figures');
    const villains = actionFigures.filter((product) => product.sub_category === 'Villains');
    const superheroes = actionFigures.filter((product) => product.sub_category === 'Superheroes');
    const heroes = actionFigures.filter((product) => product.sub_category === 'Heroes');

    return (
        <div>
            <h1 className='text-5xl text-orange-500 font-bold text-center mt-8 '>Our Products</h1>
            <p className='text-xl text-orange-300 font-semibold text-center mt-4 mb-12'>Pick Your Product</p>

            <Tabs className="text-center">
                <TabList>
                    <Tab><span className='text-xl text-violet-500'>Educational Toys</span></Tab>
                    <Tab><span className='text-xl text-violet-500'>Toy Cars</span></Tab>
                    <Tab><span className='text-xl text-violet-500'>Action Figures</span></Tab>
                </TabList>

                <TabPanel>

                    <Tabs>
                        <TabList className='mb-12'>
                            <Tab>Engineering Toys</Tab>
                            <Tab>Math Toys</Tab>
                            <Tab>Science Toys</Tab>
                            <Tab>Language Toys</Tab>
                        </TabList>

                        <TabPanel >
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8  justify-items-center'>
                                {engineeringToys.map((product) => (

                                    <ProductCard key={product.product_id}
                                        product={product}
                                        className="card w-80 bg-base-100 shadow-xl py-2 mb-6 "></ProductCard>

                                ))}
                            </div>
                        </TabPanel>

                        <TabPanel>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8  justify-items-center'>
                                {mathToys.map((product) => (
                                    <ProductCard key={product.product_id}
                                        product={product}
                                        className="card w-80 bg-base-100 shadow-xl py-2 mb-6 "></ProductCard>

                                ))}
                            </div>
                        </TabPanel>

                        <TabPanel>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8  justify-items-center'>
                                {scienceToys.map((product) => (
                                    <ProductCard key={product.product_id}
                                        product={product}
                                        className="card w-80 bg-base-100 shadow-xl py-2 mb-6 "></ProductCard>

                                ))}
                            </div>
                        </TabPanel>

                        <TabPanel>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8  justify-items-center'>
                                {languageToys.map((product) => (
                                    <ProductCard key={product.product_id}
                                        product={product}
                                        className="card w-80 bg-base-100 shadow-xl py-2 mb-6 "></ProductCard>

                                ))}
                            </div>
                        </TabPanel>
                    </Tabs>
                </TabPanel>

                <TabPanel>

                    <Tabs>
                        <TabList className='mb-12'>
                            <Tab>Sports Cars</Tab>
                            <Tab>Regular Cars</Tab>
                            <Tab>Trucks</Tab>
                        </TabList>

                        <TabPanel>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8  justify-items-center'>
                                {sportsCars.map((product) => (
                                    <ProductCard key={product.product_id}
                                        product={product}
                                        className="card w-80 bg-base-100 shadow-xl py-2 mb-6 "></ProductCard>

                                ))}
                            </div>
                        </TabPanel>

                        <TabPanel>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8  justify-items-center'>
                                {regularCars.map((product) => (
                                    <ProductCard key={product.product_id}
                                        product={product}
                                        className="card w-80 bg-base-100 shadow-xl py-2 mb-6 "></ProductCard>

                                ))}
                            </div>
                        </TabPanel>

                        <TabPanel>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8  justify-items-center'>
                                {trucks.map((product) => (
                                    <ProductCard key={product.product_id}
                                        product={product}
                                        className="card w-80 bg-base-100 shadow-xl py-2 mb-6 "></ProductCard>

                                ))}
                            </div>
                        </TabPanel>
                    </Tabs>
                </TabPanel>

                <TabPanel>

                    <Tabs>
                        <TabList className='mb-12'>
                            <Tab>Villains</Tab>
                            <Tab>Superheroes</Tab>
                            <Tab>Heroes</Tab>
                        </TabList>

                        <TabPanel>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8  justify-items-center'>
                                {villains.map((product) => (
                                    <ProductCard key={product.product_id}
                                        product={product}
                                        className="card w-80 bg-base-100 shadow-xl py-2 mb-6 "></ProductCard>

                                ))}
                            </div>
                        </TabPanel>

                        <TabPanel>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8  justify-items-center'>
                                {superheroes.map((product) => (
                                    <ProductCard key={product.product_id}
                                        product={product}
                                        className="card w-80 bg-base-100 shadow-xl py-2 mb-6 "></ProductCard>

                                ))}
                            </div>
                        </TabPanel>

                        <TabPanel>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8  justify-items-center'>
                                {heroes.map((product) => (
                                    <ProductCard key={product.product_id}
                                        product={product}
                                        ></ProductCard>

                                ))}
                            </div>
                        </TabPanel>
                    </Tabs>
                </TabPanel>
            </Tabs>
        </div>
    );
}

export default Products;
