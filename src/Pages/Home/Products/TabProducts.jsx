import React, { useEffect, useState } from 'react';
import { FaArrowRight, FaStar, FaStarHalf } from 'react-icons/fa';

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h1>All Products {products.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    products.map(product => {
                        return (
                            <div className="card w-96 bg-base-100 shadow-xl py-2">
                                <figure><img className='h-60 w-60 rounded-xl' src={product.picture_url} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-white text-xl font-bold">{product.name}</h2>
                                    <div className='flex items-center justify-between'>
                                        <div>
                                            <h2 className='text-lg font-semibold text-orange-300'> Price : {product.price}</h2>
                                            <p className='flex items-center text-orange-500'><span className='mr-2'>{product.rating}</span>< FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalf/></p>
                                        </div>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary"><FaArrowRight></FaArrowRight></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div >
    );
};

export default Products;