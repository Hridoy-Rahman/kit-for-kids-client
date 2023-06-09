import Aos from 'aos';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function AllToys() {
    const [toys, setToys] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [limit, setLimit] = useState(20);
    useEffect(() => {
        Aos.init();
      }, []);

    useEffect(() => {
        fetch(`https://kit-for-kids-server.vercel.app/addedtoy`)
            .then((response) => response.json())
            .then((data) => setToys(data))
            .catch((error) => console.error(error));
    }, [limit]);

    const filteredToys = toys.filter((toy) =>
        toy.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSeeMore = () => {
        console.log(limit);
        setLimit(limit + 20);
    };

    return (
        <div data-aos="zoom-out" className="container mx-auto p-2 mb-12">
            <h1 className="text-3xl font-bold mb-4 text-center">All Toys</h1>
            <input
                type="text"
                placeholder="Search by Toy Name"
                className="w-1/2 lg:w-1/4 p-2 rounded mb-4 "
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="px-4 text-lg lg:text-xl font-bold ">Toy Name</th>
                        <th className="px-4 text-lg lg:text-xl font-bold ">Seller</th>
                        <th className="px-4 text-lg lg:text-xl font-bold ">Sub-category</th>
                        <th className="px-4 text-lg lg:text-xl font-bold ">Price</th>
                        <th className="px-4 text-lg lg:text-xl font-bold ">Available Quantity</th>
                        <th className="px-4 text- font-bold py-2"></th>
                    </tr>
                </thead>
                <tbody>
                    {filteredToys.map((toy) => (
                        <tr key={toy._id}>
                            <td className="text-center text-xl font-semibold text-blue-700 p-2">{toy.name}</td>
                            <td className="text-center text-xl font-semibold text-blue-700 p-2">{toy.seller_name}</td>
                            <td className="text-center text-xl font-semibold text-blue-700 p-2">{toy.sub_category}</td>
                            <td className="text-center text-xl font-semibold text-blue-700 p-2">{toy.price}</td>
                            <td className="text-center text-xl font-semibold text-blue-700 p-2">{toy.available_quantity}</td>
                            <td className="text-center text-sm font-semibold text-blue-700 p-2">
                                <Link to={`/addedtoy/${toy._id}`}><button className="btn btn-primary">
                                    Details
                                </button></Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {filteredToys.length >= limit && (
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-blue-700 font-bold py-2 px-4 rounded mt-4"
                    onClick={handleSeeMore}
                >
                    See More
                </button>
            )}
        </div>
    );
}

export default AllToys;
