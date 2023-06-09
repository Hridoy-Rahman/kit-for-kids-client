import { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Aos from 'aos';
import Swal from 'sweetalert2';

function MyToys() {
    const { user } = useContext(AuthContext);
    const [myToy, setMyToy] = useState([]);
    // console.log(user)



    useEffect(() => {
        Aos.init();
    }, []);

    useEffect(() => {
        fetch(`https://kit-for-kids-server.vercel.app/addedToy?user_email=${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                setMyToy(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [user]);

    const handleDeleteToy = id => {
        Swal.fire({
            title: 'Are you sure you want to delete?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) { 
                fetch(`https://kit-for-kids-server.vercel.app/addedToy/${id}`, {

                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Your Toy has been Deleted.',
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
                        <th className="px-4 text-xl font-bold py-2">Toy Name</th>
                        <th className="px-4 text-xl font-bold py-2">Seller</th>
                        <th className="px-4 text-xl font-bold py-2">Sub-category</th>
                        <th className="px-4 text-xl font-bold py-2">Price</th>
                        <th className="px-4 text-xl font-bold py-2">Available Quantity</th>
                        <th className="px-4 text-xl font-bold py-2"></th>
                    </tr>
                </thead>
                <tbody>
                    {myToy.map((toy) => (
                        <tr key={toy._id}>
                            <td className="text-center text-xl font-semibold text-blue-700 p-2">{toy.name}</td>
                            <td className="text-center text-xl font-semibold text-blue-700 p-2">{toy.seller_name}</td>
                            <td className="text-center text-xl font-semibold text-blue-700 p-2">{toy.sub_category}</td>
                            <td className="text-center text-xl font-semibold text-blue-700 p-2">{toy.price}</td>
                            <td className="text-center text-xl font-semibold text-blue-700 p-2">{toy.available_quantity}</td>
                            <td className="text-center text-sm font-semibold text-blue-700 p-2">
                                <Link to={`/updateToy/${toy._id}`}>
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
