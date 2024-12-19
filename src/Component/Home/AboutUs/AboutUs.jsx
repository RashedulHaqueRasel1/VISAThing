
const AboutUs = () => {
    return (
        <div className="bg-[#EFF1F5] p-16 mt-10">


            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 mx-auto container mt-10">
                {/* Left Section */}
                <div className="bg-white py-48 px-4 rounded-xl relative">
 

                    <div className="z-50 ">
                        <h4 className="text-[#21763F] text-xl font-normal font-WorkSans mb-2">About Us</h4>
                        <h2 className="text-4xl font-semibold font-WorkSans mb-4 text-[#111322] leading-tight">
                            Aspired To Build A Better <br /> Financial World
                        </h2>
                        <p className="text-[#4A5578] leading-relaxed mb-4 pr-16 font-WorkSans">
                            Raqamyah is a Sharia-compliant crowdfunding platform licensed by the Saudi
                            Central Bank (SAMA). It connects SMEs seeking financing with investors
                            looking for   competitive returns. By directly funding SMEs, investors earn
                            profits while  supporting business growth and economic development. The
                            platform&apos;s mission is   to simplify and accelerate funding for small businesses
                            to help them thrive.
                        </p>
                        <ul className="text-[#4A5578] font-WorkSans space-y-4">
                            <li className="flex items-center ">
                                <span className="text-green-500 mr-3 "><img src={"https://i.postimg.cc/j29dC8F0/Vector-1.png"} alt="" /></span> Sharia-Compliant Crowdlending
                            </li>
                            <li className="flex items-center ">
                                <span className="text-green-500 mr-3 "><img src={"https://i.postimg.cc/j29dC8F0/Vector-1.png"} alt="" /></span> Empowering Business Growth
                            </li>
                            <li className="flex items-center">
                                <span className="text-green-500 mr-3 "><img src={"https://i.postimg.cc/j29dC8F0/Vector-1.png"} alt="" /></span> Direct Investment Opportunities
                            </li>
                            <li className="flex items-center">
                                <span className="text-green-500 mr-3 "><img src={"https://i.postimg.cc/j29dC8F0/Vector-1.png"} alt="" /></span> Regulated and Trusted
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Right Section */}
                <div className="mx-auto container rounded-xl">

                    <img
                        src="https://i.postimg.cc/DwRy7Ybq/image.png"
                        alt="About Us"
                        className="flex justify-center p-4 rounded-3xl bg-white "
                    />

                    <div className=" bg-white rounded-xl">
                        <div className="flex gap-4 p-4 mt-4">

                            <div className=" w-1/2  p-4 bg-[#F9F9FB] rounded-xl">

                                <div className=" ">

                                    <div className="flex justify-center items-center bg-[#C3F2D3] h-16 w-16 rounded-full">
                                        <img src={"https://i.postimg.cc/259BDx7v/About-Us-icon.png"} alt="" />

                                    </div>
                                    <h1 className="text-[#111322] font-WorkSans font-medium mt-6 text-xl">Lower Rates</h1>
                                </div>

                            </div>

                            <div className=" w-1/2  p-4 bg-[#F9F9FB] rounded-xl">

                                <div className=" ">

                                    <div className="flex justify-center items-center bg-[#C3F2D3] h-16 w-16 rounded-full">
                                        <img src={"https://i.postimg.cc/259BDx7v/About-Us-icon.png"} alt="" />

                                    </div>
                                    <h1 className="text-[#111322] font-WorkSans font-medium mt-6 text-xl">Lower Rates</h1>
                                </div>

                            </div>



                        </div>



                        <div className="flex gap-4 p-4  ">

                            <div className=" w-1/2  p-4 bg-[#F9F9FB] rounded-xl">

                                <div className=" ">

                                    <div className="flex justify-center items-center bg-[#C3F2D3] h-16 w-16 rounded-full">
                                        <img src={"https://i.postimg.cc/259BDx7v/About-Us-icon.png"} alt="" />

                                    </div>
                                    <h1 className="text-[#111322] font-WorkSans font-medium mt-6 text-xl">Lower Rates</h1>
                                </div>

                            </div>

                            <div className=" w-1/2  p-4 bg-[#F9F9FB] rounded-xl">

                                <div className=" ">

                                    <div className="flex justify-center items-center bg-[#C3F2D3] h-16 w-16 rounded-full">
                                        <img src={"https://i.postimg.cc/259BDx7v/About-Us-icon.png"} alt="" />

                                    </div>
                                    <h1 className="text-[#111322] font-WorkSans font-medium mt-6 text-xl">Lower Rates</h1>
                                </div>

                            </div>



                        </div>


                    </div>


                </div>
            </div>
        </div>
    );
};

export default AboutUs;