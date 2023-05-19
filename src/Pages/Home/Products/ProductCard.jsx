import React from 'react';
import { FaArrowRight, FaStar, FaStarHalf } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <div className="card w-80 bg-base-100 shadow-xl py-2 mb-6 text-start">
            <figure>
                <img
                    className="h-60 w-60 rounded-xl"
                    src={product.picture_url}
                    alt=""
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-white text-xl font-bold">{product.name}</h2>
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-lg font-semibold text-orange-300">
                            Price : {product.price}
                        </h2>
                        <p className="flex items-center text-orange-500">
                            <span className="mr-2">{product.rating}</span>
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalf />
                        </p>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`/toydetails/${product._id}`}><button className="btn btn-primary">
                            <FaArrowRight />
                        </button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;