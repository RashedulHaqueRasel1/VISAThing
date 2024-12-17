

const Banner = () => {
    return (
        <div className="mx-auto container   my-20">


            <div className="grid grid-cols-1  lg:grid-cols-2 p-4 md:p-2   ">

                {/* Left side */}
                <div className="flex items-center gap-3 ">
                    <div className="relative ">
                        <div className="absolute ml-36 -mt-16">
                            <img src={'https://i.postimg.cc/zGLwhz1g/Medallions.png'} alt="" />
                        </div>
                        <img src={'https://i.postimg.cc/28k21N6Q/Frame-48095934.png'} alt="" />

                        <div className="flex  items-center bg-[#90C0F042] p-4 mt-3 bg-opacity-40 rounded-xl">
                            <div className="flex flex-col items-center justify-center">
                                <div className="flex -space-x-4">
                                    <img alt="" className="w-8 h-8 border rounded-full dark:bg-gray-500 dark:border-gray-300" src="https://i.postimg.cc/wBYVd11k/Ellipse-371.png" />
                                    <img alt="" className="w-8 h-8 border rounded-full dark:bg-gray-500 dark:border-gray-300" src="https://i.postimg.cc/0jjGCm49/Ellipse-372.png" />
                                    <img alt="" className="w-8 h-8 border rounded-full dark:bg-gray-500 dark:border-gray-300" src="https://i.postimg.cc/SxC6VmgY/Ellipse-373.png" />
                                    <img alt="" className="w-8 h-8 border rounded-full dark:bg-gray-500 dark:border-gray-300" src="https://i.postimg.cc/gjxRhpwJ/Ellipse-374.png" />

                                </div>
                            </div>
                            <h1 className="text-[#111322] text-[13px] ml-2 font-WorkSans">Trusted by 15k+ investors</h1>
                        </div>
                    </div>

                    <div>
                        <img src={'https://i.postimg.cc/ZnVP80Rr/Frame-48095935.png'} alt="" />
                        <img src={'https://i.postimg.cc/fWKvnqKJ/Frame-48095937.png'} alt="" className="mt-4" />
                    </div>
                </div>

 
                {/* Right Side */}
                <div className="flex items-center ">

                    <div>

                        <div>
                            <img src={'https://i.postimg.cc/BvqXf3Bz/title.png'} alt="" />
                        </div>

                        <h1 className="text-6xl font-WorkSans font-semibold text-[#111322] mt-4 leading-tight">Smart Investments <br /> for Verified SMEs</h1>

                        <p className="text-[#4A5578] mt-3  ">Smart Investments for Verified SMEs  connects investors with vetted small <br /> businesses, promoting informed decisions and local economic growth</p>

                        <div className="flex gap-10 mt-10">
                            <button className=" py-3 px-7 bg-[#005397] text-[#FFFFFF] rounded-full font-medium ">
                                Start Investing
                            </button>
                            <button className="py-3 px-7   text-[#111322] rounded-3xl font-medium border border-[#005397]">
                                Get Funded
                            </button>
                        </div>

                        <div className="cursor-pointer mt-20">
                            <img src={'https://i.postimg.cc/cHd1PGfJ/Trust-Pilot-Micro-Review-Count.png'} alt="" />
                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Banner;