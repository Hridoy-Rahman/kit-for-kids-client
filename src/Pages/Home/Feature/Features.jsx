// import React from 'react';

// const Features = () => {
//     return (
//         <section className="mb-12">
//             <h2 className="text-5xl text-center text-orange-500 mb-8">Our Kit for Kids Features</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-blue-500">
//                 <div  >
//                     <img src="https://i.ibb.co/X3yFhNf/f1.jpg" alt="Feature 1" className="w-full h-80" />
//                     <h3 className="text-xl font-semibold mt-4">Interactive Learning</h3>
//                     <p className=" ">Engage children with interactive and educational activities.</p>
//                 </div>
//                 <div  >
//                     <img src="https://i.ibb.co/FYbj33B/f2.jpg" alt="Feature 2" className="w-full h-80" />
//                     <h3 className="text-xl font-semibold mt-4">Creative Projects</h3>
//                     <p className=" ">Encourage creativity through hands-on projects and crafts.</p>
//                 </div>
//                 <div  >
//                     <img src="https://i.ibb.co/XXgzYb5/f3.jpg" alt="Feature 3" className="w-full h-80" />
//                     <h3 className="text-xl font-semibold mt-4">STEM Education</h3>
//                     <p className=" ">Introduce kids to Science, Technology, Engineering, and Math.</p>
//                 </div>
//                 <div  >
//                     <img src="https://i.ibb.co/L6Z2R9D/f4.jpg" alt="Feature 4" className="w-full h-80" />
//                     <h3 className="text-xl font-semibold mt-4">Problem Solving</h3>
//                     <p className=" ">Develop critical thinking and problem-solving skills.</p>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Features;

import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';

const Features = () => {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <section className="mb-12 p-4">
            <h2 className="text-5xl text-center text-orange-500 mb-8">Our Kit for Kids Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-blue-500">
                <div data-aos="fade-up-right">
                    <img src="https://i.ibb.co/X3yFhNf/f1.jpg" alt="Feature 1" className="w-full h-80" />
                    <h3 className="text-xl font-semibold mt-4">Interactive Learning</h3>
                    <p className="">Engage children with interactive and educational activities.</p>
                </div>
                <div data-aos="fade-up-right">
                    <img src="https://i.ibb.co/FYbj33B/f2.jpg" alt="Feature 2" className="w-full h-80" />
                    <h3 className="text-xl font-semibold mt-4">Creative Projects</h3>
                    <p className="">Encourage creativity through hands-on projects and crafts.</p>
                </div>
                <div data-aos="fade-up-left">
                    <img src="https://i.ibb.co/XXgzYb5/f3.jpg" alt="Feature 3" className="w-full h-80" />
                    <h3 className="text-xl font-semibold mt-4">STEM Education</h3>
                    <p className="">Introduce kids to Science, Technology, Engineering, and Math.</p>
                </div>
                <div data-aos="fade-up-left">
                    <img src="https://i.ibb.co/L6Z2R9D/f4.jpg" alt="Feature 4" className="w-full h-80" />
                    <h3 className="text-xl font-semibold mt-4">Problem Solving</h3>
                    <p className="">Develop critical thinking and problem-solving skills.</p>
                </div>
            </div>
        </section>
    );
};

export default Features;
