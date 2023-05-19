
const Banner = () => {
    return (
        <div className="carousel w-full lg:h-[600px] mb-12">
            <div id="slide1" className="carousel-item relative w-full">
                <img src='https://i.ibb.co/3y59FDT/image2.png' className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 lg:w-1/2'>
                        <h2 className='text-xl lg:text-6xl font-bold'>Toys are children's words and play is their language.
                        </h2>
                        <p className="font-bold text-lg lg:text-2xl text-end">GARRY L. LANDRETH</p>
                        <div>
                            <button className="btn btn-primary mr-5">Explore</button>

                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/qNbYV3w/image1.png" className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 lg:w-1/2'>
                        <h2 className='text-xl lg:text-6xl font-bold'>The difference between men and boys is the price of their toys.</h2>
                        <p className="font-bold text-lg lg:text-2xl text-end">WILLIAM B. MCDONALD</p>
                        <div>
                            <button className="btn btn-primary mr-5">Explore</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative  w-full">
                <img src="https://i.ibb.co/GMhXKfX/image3.png" className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 lg:w-1/2'>
                        <h2 className='text-2xl lg:text-6xl font-bold'>The simplest toy, one which even the youngest child can operate, is called a grandparent.</h2>
                        <p className="font-bold text-lg lg:text-2xl text-end">SAM LEVENSON</p>
                        <div>
                            <button className="btn btn-primary mr-5">Explore</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;