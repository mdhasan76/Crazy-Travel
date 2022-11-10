import React from 'react';
import useTitle from '../../shared/useTitle';

const Blog = () => {
    useTitle("Blog")
    return (
        <section>
            <div className='bg-indigo-500 p-10  rounded-lg'>
                <h2 className='text-white font-bold text-3xl sm:text-5xl'>My Recent Blog</h2>
            </div>
            <div className='max-w-xl mx-auto p-4'>
                <div className='mb-4'>
                    <h2 className=' text-2xl font-semibold py-2 sm:text-3xl'>Q1. what is the Difference between SQL and NoSQL Database?</h2>
                    <p className='text-lg text-justify font-mono opacity-80'> ={'>'} MySQL is one of the types of relational database whereas NoSQL is more of design based database type .SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
                </div>
                <div>
                    <h2 className=' text-2xl font-semibold py-2 sm:text-3xl'>Q2. What is JWT?  and how does it work??</h2>
                    <p className='text-lg text-justify font-mono opacity-80'> ={'>'} JWT full form is  JSON Web Token. it is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).JWTs are a good way of securely transmitting information between parties because they can be signed, which means you can be sure that the senders are who they say they are. Additionally, the structure of a JWT allows you to verify that the content hasn't been tampered with.</p>
                </div>
                <div>
                    <h2 className=' text-2xl font-semibold py-2 sm:text-3xl'>Q3.what is the Difference between javascript and Node.js?</h2>
                    <p className='text-lg text-justify font-mono opacity-80'> ={'>'} JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.
                    </p>
                </div>
                <div>
                    <h2 className=' text-2xl font-semibold py-2 sm:text-3xl'>Q4. How does NodeJS handle multiple requests at the same time??</h2>
                    <p className='text-lg text-justify font-mono opacity-80'> ={'>'} Node.js can handle 40K requests per second having Node. it receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. Node. js itself is multithreaded and provides hidden threads through the libuv library, which handles I/O operations like reading files from a disk or network requests.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Blog;