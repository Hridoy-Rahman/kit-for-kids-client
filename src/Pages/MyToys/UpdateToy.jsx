import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Swal from 'sweetalert2';

function UpdateToy() {
    const {id} = useParams();
    const [price, setPrice] = useState();
    const [availableQuantity, setAvailableQuantity] = useState();
    const [description, setDescription] = useState('');
  
    useEffect(() => {
      const fetchToyDetails = async () => {
        try {
          const response = await fetch(`https://kit-for-kids-server.vercel.app/addedToy/${id}`);
          const data = await response.json();
          
          setPrice(data.price);
          setAvailableQuantity(data.availableQuantity);
          setDescription(data.description);
          console.log(id,data.price,data.user_email,data.seller_email)
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchToyDetails();
    }, [id]);
  
    const handleUpdateToy = async (event) => {
      event.preventDefault();
      const updatedToyData = {
        price,
        available_quantity: availableQuantity,
        description,
      };
      console.log()
  
      try {
        const response = await fetch(`https://kit-for-kids-server.vercel.app/addedToy/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedToyData),
        });
  
        if (response.ok) {
            console.log(updatedToyData)
          Swal.fire('Success!', 'Toy updated successfully.', 'success');
        } else {
          console.log('Failed to update toy');
        }
      } catch (error) {
        console.log(error);
      }
    };

    return (
        <div className="container mx-auto px-4 mb-12">
            <h1 className="text-3xl text-center font-bold mb-4">Update Toy</h1>
            <form onSubmit={handleUpdateToy} className="max-w-sm mx-auto">
                <div className="mb-4">
                    <label htmlFor="price" className="text-lg font-semibold mb-2 block">Price:</label>
                    <input
                        type="number"
                        id="price"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        value={price}
                        onChange={(event) => setPrice(event.target.value)}
                        placeholder="Price"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="quantity" className="text-lg font-semibold mb-2 block">Available Quantity:</label>
                    <input
                        type="number"
                        id="quantity"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        value={availableQuantity}
                        onChange={(event) => setAvailableQuantity(event.target.value)}
                        placeholder="Available Quantity"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="text-lg font-semibold mb-2 block">Description:</label>
                    <textarea
                        id="description"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                        placeholder="Description"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Update Toy
                </button>
            </form>
        </div>

    );
}

export default UpdateToy;
