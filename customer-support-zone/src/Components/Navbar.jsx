import React from 'react';
import { expandMenu } from '../Utilities/mobileMenu';

const Navbar = () => {

    return (
        <div className='py-5 shadow-sm bg-white fixed w-full top-0'>
            <div className="container w-[90%] mx-auto flex flex-row justify-between items-center">
                <div className="logo">
                    <h1 className="text-2xl font-bold">CS - Ticket System</h1>
                </div>

                <nav className="menu flex flex-row items-center justify-center md:justify-between flex-wrap">
                    <div className="hidden md:flex menu-items items-center justify-between gap-5">
                        <a href="#" className='text-lg hover:cursor-pointer hover:underline'>Home</a>
                        <a href="#" className='text-lg hover:cursor-pointer hover:underline'>FAQ</a>
                        <a href="#ticketStatus" className='text-lg hover:cursor-pointer hover:underline'>Ticket Status</a>
                        <a href="#" className='text-lg hover:cursor-pointer hover:underline'>Download</a>
                        <a href="#" className='text-lg mr-4 hover:cursor-pointer hover:underline'>Contact</a>
                    </div>
                    <button className='rounded bg-[linear-gradient(125.07deg,_#632EE3_0%,_#9F62F2_100%)] text-white px-4 py-2 cursor-pointer mt-4 md:mt-0 mr-5 hidden md:block'>+ New Ticket</button>

                    <div className='flex md:hidden flex-col ietms-center justify-center ml-6 mt-3 cursor-pointer' id="menuToggler" onClick={expandMenu}>
                        <span className='w-[30px] h-[4px] bg-black mt-1'></span>
                        <span className='w-[30px] h-[4px] bg-black mt-1'></span>
                        <span className='w-[30px] h-[4px] bg-black mt-1'></span>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;