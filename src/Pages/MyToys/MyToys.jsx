
import { Link, useLoaderData, useParams } from 'react-router-dom';

function MyToys() {
    const { user_email } = useParams(); // Retrieve the user_email from the route params
  const myToy = useLoaderData();

   

    return (
        <div className="container mx-auto px-4 mb-12">
            <h1 className="text-3xl text-center font-bold mb-4">All Toys</h1>
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="px-4 text-xl font-bold py-2">Seller</th>
                        <th className="px-4 text-xl font-bold py-2">Toy Name</th>
                        <th className="px-4 text-xl font-bold py-2">Sub-category</th>
                        <th className="px-4 text-xl font-bold py-2">Price</th>
                        <th className="px-4 text-xl font-bold py-2">Available Quantity</th>
                        <th className="px-4 text- font-bold py-2"></th>
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
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                >
                    See More
                </button>
            )}
        </div>
    );
}

export default MyToys;
