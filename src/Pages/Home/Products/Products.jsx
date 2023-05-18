import React, { useEffect, useState } from 'react';

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
                    products.map(product=>{
                        return <img className='h-60 w-60' src={product.picture_url} alt="" />
                    })
                }
            </div>
        </div>
    );
};

export default Products;