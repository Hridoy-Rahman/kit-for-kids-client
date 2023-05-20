import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className='flex flex-col my-36 mx-12 lg:my-28 lg:mx-36 items-center'>
      <img className='w-96 h-96 rounded-full' src="https://i.ibb.co/pvJftBd/404-error-page-not-found.jpg" alt="404 Not Found" />
      <h5 className='text-3xl mt-12 mb-12'>The page you are looking for does not exist.</h5>
      <Link className='text-2xl bg-cyan-100 text-blue-800 rounded-xl p-2' to="/">Go to Homepage</Link>
       </div>
  );
};

export default NotFoundPage;
