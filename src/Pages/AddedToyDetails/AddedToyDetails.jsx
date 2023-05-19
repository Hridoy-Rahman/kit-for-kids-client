import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const AddedToyDetails = () => {
    const toy=useLoaderData()

    return (
        <div className="flex  mx-auto gap-6 border mb-12 rounded-2xl justify-center items-center p-12">
            <div className="w-full ">
                <img
                    src={toy.picture_url}
                    alt={toy.name}
                    className="w-96 h-96 rounded-lg mb-4"
                />
            </div>
            <div className="w-full">
                <h2 className=" text-2xl lg:text-4xl font-bold text-blue-500 mb-2">
                    {toy.name}
                </h2>
                <p className=" mb-2 lg:text-xl font-semibold">
                    Seller Name : <span className=" lg:text-2xl font-bold text-blue-300"> {toy.seller_name}</span>
                </p>
                <p className="mb-2 lg:text-xl font-semibold">
                    Contact Email : <span className=" lg:text-2xl font-bold text-blue-300">{toy.seller_email}</span>
                </p>
                <p className="mb-2 lg:text-xl font-semibold">
                    Price : <span className=" lg:text-2xl font-bold text-blue-300"> {toy.price}</span>
                </p>
                <p className=" mb-2 lg:text-xl font-semibold">
                    Rating : <span className=" lg:text-2xl font-bold text-blue-300">{toy.rating}/5</span>
                </p>
                <p className="mb-2 lg:text-xl font-semibold">
                    Available quantity : <span className=" lg:text-2xl font-bold text-blue-300">{toy.available_quantity}</span>
                </p>
                <p className="mb-2 lg:text-xl font-semibold ">
                    
                        Product Details : <span className=" lg:text-2xl font-bold text-blue-300">{toy.description}</span> 
                </p>
                <button className="btn btn-primary">Approve</button>
            </div>
        </div>
    );
};

export default AddedToyDetails;
