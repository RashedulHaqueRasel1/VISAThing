import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { GoChevronDown } from "react-icons/go";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const NavLink = <>
        <a href="#" className="text-[#00233F] font-semibold">Home</a>
        <a href="#" className="text-[#00233F] font-semibold">For Business</a>
        <a href="#" className="text-[#00233F] font-semibold">For Investors</a>
        <a href="#" className="text-[#00233F] font-semibold">Financing Rates</a>
        <a href="#" className="text-[#00233F] font-semibold flex gap-1 ">Others  <GoChevronDown className="text-xl text-[#003B6B] font-semibold mt-1" /></a>
    </>

    return (
        <nav className="w-full p-2 md:py-6 border-b bg-white shadow-md ">
            {/* Navbar Container */}
            <div className="flex justify-between  items-center font-semibold mx-auto container p-4 md:p-0">
                {/* Logo */}
                <div>
                    <h1 className="text-5xl text-[#005397] font-bold">RS<span className="text-[#36B0BE]">I</span>N</h1>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex xl:gap-10 md:gap-8 gap-2">
                    {NavLink}
                </div>

                {/* Button */}
                <div className="hidden md:block">

                    <button className="py-2 px-6   text-[#005397] rounded-3xl font-medium  ">
                        Log In
                    </button>
                    <button className="py-4 px-8 bg-[#005397] text-[#FFFFFF] rounded-full font-medium">
                        Apply Now
                    </button>
                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-3xl">
                        {menuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu - Slide-in from Left */}
            <div
                className={`${menuOpen ? "translate-x-0" : "-translate-x-full"
                    } fixed inset-0 bg-black bg-opacity-50 md:hidden transition-all duration-300 `}
                onClick={toggleMenu}
            >

                <div
                    className={`${menuOpen ? "translate-x-0" : "-translate-x-full"
                        } fixed left-0 top-0 w-3/4 h-full bg-white shadow-lg p-6 transition-transform duration-300`}
                >
                    <div className="flex flex-col gap-4 mt-8">
                        {NavLink}
                        <button className="py-2 px-6   text-[#005397] rounded-3xl font-medium border border-[#005397]  ">
                            Log In
                        </button>
                        <button className="py-4 px-8 bg-[#005397] text-[#FFFFFF] rounded-full font-medium">
                            Apply Now
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
