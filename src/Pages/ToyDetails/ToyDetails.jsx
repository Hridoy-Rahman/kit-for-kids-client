import Aos from "aos";
import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
    useEffect(() => {
        Aos.init();
      }, []);

    const toy = useLoaderData()

    return (
        <div className="flex  mx-auto gap-6 border mb-12 rounded-2xl justify-center items-center p-12">
            <div className="w-full ">
                <img src={toy.picture_url} alt={toy.name} className="w-96 h-96 rounded-lg mb-4" />
            </div>
            <div className="w-full">
                <h2 className=" text-2xl lg:text-4xl font-bold text-blue-500 mb-2">{toy.name}</h2>
                <p className="mb-2 lg:text-2xl font-bold text-blue-300">Seller Name : {toy.seller_name}</p>
                <p className="mb-2 lg:text-xl font-bold text-blue-300">Contact Email : {toy.seller_email}</p>
                <p className="mb-2 lg:text-xl font-bold text-blue-300">Price: {toy.price}</p>
                <p className=" mb-2 lg:text-lg font-bold text-blue-300">Rating: {toy.rating}/5</p>
                <p className="mb-2 lg:text-lg font-bold text-blue-300">Available quantity : {toy.available_quantity}</p>
                <p className="mb-2 "><span className=" lg:text-lg font-bold text-blue-300">Produc Details :</span> {toy.description}</p>
                <button className="btn btn-primary">Buy Now</button>
            </div>
        </div>
    );
};

export default ToyDetails;
