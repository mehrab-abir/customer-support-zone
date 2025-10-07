import React from 'react';
import { closeMenu } from '../Utilities/mobileMenu';

const MobileNavbar = () => {

    return (
        <div className='flex md:hidden w-[200px] h-screen fixed top-0 right-0 bg-green-700 translate-x-full transition-all duration-700' id="mobileNav">

            <div className='w-[35px] h-[35px] border border-white rounded-full flex items-center justify-center m-5 cursor-pointer' onClick={closeMenu}>
                <i className="fa-solid fa-arrow-right text-white text-2xl"></i>
            </div>
            
            <div className="menu-items flex flex-col absolute top-14 left-5 text-white">
                <a href="#" className='text-lg hover:cursor-pointer hover:underline mt-3 font-semibold'>Home</a>
                <a href="#" className='text-lg hover:cursor-pointer hover:underline mt-3 font-semibold'>FAQ</a>
                <a href="#ticketStatus" className='text-lg hover:cursor-pointer hover:underline mt-3 font-semibold'>Ticket Status</a>
                <a href="#" className='text-lg hover:cursor-pointer hover:underline mt-3 font-semibold'>Download</a>
                <a href="#" className='text-lg mr-4 hover:cursor-pointer hover:underline mt-3 font-semibold'>Contact</a>
                </div>
        </div>
    );
};

export default MobileNavbar;