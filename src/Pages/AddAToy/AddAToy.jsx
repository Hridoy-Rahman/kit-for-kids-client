import React, { useState } from 'react';
import Swal from 'sweetalert2';
import 'tailwindcss/tailwind.css';

const AddAToy = () => {
    const [toyData, setToyData] = useState({
        pictureUrl: '',
        name: '',
        sellerName: '',
        sellerEmail: '',
        subCategory: '',
        price: '',
        rating: '',
        availableQuantity: '',
        detailDescription: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setToyData({ ...toyData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const price=form.price.value;
        const rating=form.rating.value;
        const picture_url=form.pictureUrl.value;
        const seller_name=form.sellerName.value;
        const seller_email=form.sellerEmail.value;
        const category=form.category.value;
        const sub_category=form.subCategory.value;
        const available_quantity=form.availableQuantity.value;
        const description=form.detailDescription.value;

        const addedToy={
            name,picture_url,seller_email,seller_name,price,category,sub_category,description,available_quantity,rating
        }
        console.log(addedToy)
        fetch('http://localhost:5000/alltoy',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(addedToy)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire(
                    'Successfull',
                    'You added the item successfully',
                    'success'
                  )
            }
        })
    };

    return (
        <div>
            <h1 className='text-center text-violet-600 text-5xl mb-12 font-bold'>Add a Toy</h1>
            <form className=" mx-auto w-1/2 grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 items-center  mt-8" onSubmit={handleSubmit}>
                <label className="block mb-2">
                    Picture URL of the toy:
                    <input type="text" name="pictureUrl" value={toyData.pictureUrl} onChange={handleInputChange} className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500" />
                </label>

                <label className="block mb-2">
                    Name:
                    <input type="text" name="name" value={toyData.name} onChange={handleInputChange} className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500" />
                </label>

                <label className="block mb-2">
                    Seller name:
                    <input type="text" name="sellerName" value={toyData.sellerName} onChange={handleInputChange} className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500" />
                </label>

                <label className="block mb-2">
                    Seller email:
                    <input type="email" name="sellerEmail" value={toyData.sellerEmail} onChange={handleInputChange} className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500" />
                </label>

                <label className="block mb-2">
                    Category:
                    <select name="category" value={toyData.category} onChange={handleInputChange} className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500">
                        <option value="">Select a category</option>
                        <option name="education" value="Education">Education</option>
                        <option  name="toyCars" value="Toy Cars">Toy Cars</option>
                        <option name="action_Figures" value="Action Figures">Action Figures</option>
                    </select>
                </label>

                {toyData.category === "Education" && (
                    <label className="block mb-2">
                        Sub-category:
                        <select name="subCategory" value={toyData.subCategory} onChange={handleInputChange} className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500">
                            <option value="">Select a sub-category</option>
                            <option value="Engineering Toys">Engineering Toys</option>
                            <option value="Math Toys">Math Toys</option>
                            <option value="Language Toys">Language Toys</option>
                            <option value="Science Toys">Science Toys</option>
                        </select>
                    </label>
                )}

                {toyData.category === "Toy Cars" && (
                    <label className="block mb-2">
                        Sub-category:
                        <select name="subCategory" value={toyData.subCategory} onChange={handleInputChange} className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500">
                            <option value="">Select a sub-category</option>
                            <option value="Sports Car">Sports Car</option>
                            <option value="Regular Car">Regular Car</option>
                            <option value="Truck">Truck</option>
                        </select>
                    </label>
                )}

                {toyData.category === "Action Figures" && (
                    <label className="block mb-2">
                        Sub-category:
                        <select name="subCategory" value={toyData.subCategory} onChange={handleInputChange} className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500">
                            <option value="">Select a sub-category</option>
                            <option value="Villains">Villains</option>
                            <option value="Superheroes">Superheroes</option>
                            <option value="Heroes">Heroes</option>
                        </select>
                    </label>
                )}
                <label className="block mb-2">
                    Price:
                    <input type="number" name="price" value={toyData.price} onChange={handleInputChange} className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500" />
                </label>

                <label className="block mb-2">
                    Rating:
                    <input type="number" min="0" max="5" name="rating" value={toyData.rating} onChange={handleInputChange} className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500" />
                </label>

                <label className="block mb-2">
                    Available quantity:
                    <input type="number" name="availableQuantity" value={toyData.availableQuantity} onChange={handleInputChange} className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500" />
                </label>

                <label className="block mb-2">
                    Detail description:
                    <textarea name="detailDescription" value={toyData.detailDescription} onChange={handleInputChange} className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"></textarea>
                </label>


                <button type="submit" className="btn btn-primary ">
                    Add Toy
                </button>
            </form>
        </div>
    );
};

export default AddAToy;
