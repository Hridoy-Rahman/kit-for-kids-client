import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Aos from 'aos';
import Swal from 'sweetalert2';

function MyToys() {
    const { user } = useContext(AuthContext);
    const { user_email,_id } = useParams();
    const [myToy, setMyToy] = useState([]);
    console.log(user_email);

    useEffect(() => {
        Aos.init();
    }, []);

    useEffect(() => {
        fetch(`http://localhost:5000/addedToy?user_email=${user_email}`)
            .then((res) => res.json())
            .then((data) => {
                setMyToy(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [user_email]);

    const handleDeleteToy = id => {
        Swal.fire({
            title: 'Are you sure you want to cancel?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) { 
                fetch(`http://localhost:5000/addedToy/${id}`, {
                    
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Canceled!',
                            'Your Order has been canceled.',
                            'success'
                        );
    
                        const remaining = myToy.filter(toy => toy._id !== id);
                        setMyToy(remaining);
                    }
                });
            }
        });
    };

    return (
        <div data-aos="zoom-in-up" className="container mx-auto px-4 mb-12">
            <h1 className="text-3xl text-center font-bold mb-4">My Toys</h1>
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="px-4 text-xl font-bold py-2">Seller</th>
                        <th className="px-4 text-xl font-bold py-2">Toy Name</th>
                        <th className="px-4 text-xl font-bold py-2">Sub-category</th>
                        <th className="px-4 text-xl font-bold py-2">Price</th>
                        <th className="px-4 text-xl font-bold py-2">Available Quantity</th>
                        <th className="px-4 text-xl font-bold py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {myToy.map((toy) => (
                        <tr key={toy._id}>
                            <td className="text-center text-xl font-semibold text-white px-4 py-4">{toy.seller_name}</td>
                            <td className="text-center text-xl font-semibold text-white px-4 py-4">{toy.name}</td>
                            <td className="text-center text-xl font-semibold text-white px-4 py-4">{toy.sub_category}</td>
                            <td className="text-center text-xl font-semibold text-white px-4 py-4">{toy.price}</td>
                            <td className="text-center text-xl font-semibold text-white px-4 py-4">{toy.available_quantity}</td>
                            <td className="text-center text-sm font-semibold text-white px-4 py-4">
                                <Link to={`/addedtoy/${toy._id}`}>
                                    <button className="btn btn-primary">Update</button>
                                </Link>
                                <button className="btn btn-danger" onClick={() => handleDeleteToy(toy._id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default MyToys;
