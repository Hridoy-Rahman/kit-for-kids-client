import Aos from 'aos';
import React, { useEffect } from 'react';

function Blogs() {

    useEffect(()=>{
        Aos.init()
    },[])

    return (
        <div>
            <h2 className='text-5xl font-bold text-center text-blue-800 mb-12'>Here Our Blogs</h2>
            <div className='bg-white p-8 mb-12 rounded-xl'>

                <div data-aos="flip-up" className="border-2 p-8">
                    <h3 className='text-2xl font-bold text-cyan-800'>* What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
                    <div className='text-xl font-bold text-blue-500 mb-8'>
                        <p>
                            Access token and refresh token are commonly used in authentication systems.
                            An access token is a credential that is used to authorize and authenticate requests to protected resources. It is typically short-lived and contains information such as user identity and permissions. Access tokens are usually included in the request headers for API calls.
                        </p>
                        <p>
                            A refresh token is a long-lived token used to obtain a new access token after the current one expires. It is used to maintain a user's session and avoid the need for the user to authenticate again. Refresh tokens are securely stored on the client-side, typically in an HTTP-only cookie or local storage.
                        </p>
                    </div>
                </div>

                <div  data-aos="flip-up" className="">
                    <h3 className='text-2xl font-bold text-cyan-800'>Compare SQL and NoSQL databases?</h3>
                    <div className='text-xl font-bold text-blue-500 mb-8'>
                        <p>
                            SQL (Structured Query Language) and NoSQL (Not Only SQL) are two types of database management systems with different approaches to data storage and retrieval.
                        </p>
                        <p>
                            SQL databases are based on a relational model and use structured tables with predefined schemas. They provide ACID (Atomicity, Consistency, Isolation, Durability) compliance and are suitable for complex transactions and relationships between data. SQL databases are widely used for applications with structured data and strict data consistency requirements.
                        </p>
                        <p>
                            NoSQL databases, on the other hand, are non-relational and offer flexible schemas or no schemas at all. They are designed for handling large volumes of unstructured or semi-structured data, providing high scalability and performance. NoSQL databases use different data models, such as key-value, document, columnar, or graph, to optimize data retrieval for specific use cases. They are often used in applications that require horizontal scalability, real-time analytics, or flexible data models.
                        </p>
                    </div>
                </div>

                <div  data-aos="flip-up" className="">
                    <h3 className='text-2xl font-bold text-cyan-800'>What is Express.js? What is Nest.js (google it)?</h3>
                    <div className='text-xl font-bold text-blue-500 mb-8'>
                        <p>
                            Express.js is a popular web application framework for Node.js. It provides a set of features and utilities to build web servers and APIs quickly. Express.js simplifies the process of handling HTTP requests, routing, middleware integration, and other common web development tasks. It has a minimalistic and flexible design, allowing developers to create scalable and efficient web applications.
                        </p>
                        <p>
                            Nest.js is a progressive Node.js framework built with TypeScript. It is inspired by Angular's architecture and applies similar concepts to server-side development. Nest.js emphasizes modularity, scalability, and maintainability by using decorators, dependency injection, and a modular structure. It provides a powerful CLI, robust routing system, support for different databases and APIs, and encourages the use of SOLID principles and design patterns.
                        </p>
                    </div>
                </div>

                <div  data-aos="flip-up" className="">
                    <h3 className='text-2xl font-bold text-cyan-800'>What is MongoDB Aggregate and how does it work (google it)?</h3>
                    <div className='text-xl font-bold text-blue-500 mb-8'>
                        <p>
                            MongoDB Aggregate is a framework for data aggregation and analysis within MongoDB, a popular NoSQL database. It allows you to perform advanced data processing operations, such as filtering, grouping, sorting, joining, and computing aggregate values, directly within the database.
                        </p>
                        <p>
                            The Aggregation Pipeline is a concept in MongoDB Aggregate that enables the construction of multi-stage data processing pipelines. Each stage represents an operation that transforms the input data in some way. These stages can include $match (filtering documents), $group (grouping documents by a specified key), $sort (sorting documents), $project (selecting specific fields), and many more.
                        </p>
                        <p>
                            MongoDB Aggregate provides a flexible and powerful way to perform complex data aggregations and analysis, enabling efficient data processing and reducing the need for multiple round trips between the database and the application.
                        </p>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default Blogs;
