import Aos from 'aos';
import React, { useEffect } from 'react';

const About = () => {
    useEffect(() => {
        Aos.init();
      }, []);
    return (
        <section data-aos="flip" className="p-4 mb-12">
            <h2 className='text-5xl font-bold text-center mb-8 text-orange-500'>About Us</h2>
            <div className="flex flex-col-reverse lg:flex-row-reverse p-4 gap-6 items-center">
                <div data-aos="fade-left" className="text-2xl font-semibold text-blue-700">
                    <p>
                        At Kit for Kids, we believe in providing quality educational resources
                        for children. Our mission is to inspire young minds, encourage
                        creativity, and foster a love for learning.
                    </p>

                    <p>
                        We are dedicated to providing parents and educators with the tools
                        they need to support children's growth and education. Join us in this
                        journey of exploration and discovery!
                    </p>
                </div>
                <div data-aos="fade-right" className="">
                    <img className='rounded-xl' src="https://i.ibb.co/kSTtWxy/kids-art-kits-1524500188.jpg" alt="About Us" />
                </div>
            </div>

        </section>
    );
};

export default About;
