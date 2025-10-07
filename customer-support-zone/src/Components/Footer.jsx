import React from 'react';

const Footer = () => {
    return (
        <div className='py-12 bg-black'>
            <div className="container w-[90%] mx-auto flex flex-col items-center text-center md:flex-row md:items-start md:text-left justify-between gap-4 mb-10">
                <div className="about text-white w-[70%] md:w-[30%]">
                    <h1 className="text-2xl font-bold mb-4">CS- Ticket System</h1>
                    <p className='text-[#A1A1AA]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>

                <div className='flex flex-col text-white'>
                    <h1 className="text-2xl font-bold mb-4">Company</h1>
                    <a href="#" className='mb-2 text-[#A1A1AA] hover:underline cursor-pointer'>Our Mission</a>
                    <a href="#" className='mb-2 text-[#A1A1AA] hover:underline cursor-pointer'>About Us</a>
                    <a href="#" className='mb-2 text-[#A1A1AA] hover:underline cursor-pointer'>Contact Saled</a>
                </div>
                    

                <div className='flex flex-col text-white'>
                    <h1 className="text-2xl font-bold mb-4">Services</h1>
                    <a href="#" className='mb-2 text-[#A1A1AA] hover:underline cursor-pointer'>Customer Stories</a>
                    <a href="#" className='mb-2 text-[#A1A1AA] hover:underline cursor-pointer'>Products & Services</a>
                    <a href="#" className='mb-2 text-[#A1A1AA] hover:underline cursor-pointer'>Download Apps</a>
                </div>

                <div className='flex flex-col text-white'>
                    <h1 className="text-2xl font-bold mb-4">Information</h1>
                    <a href="#" className='mb-2 text-[#A1A1AA] hover:underline cursor-pointer'>Privacy Policy</a>
                    <a href="#" className='mb-2 text-[#A1A1AA] hover:underline cursor-pointer'>Terms & Conditions</a>
                    <a href="#" className='mb-2 text-[#A1A1AA] hover:underline cursor-pointer'>Join Us</a>
                </div>

                <div className='flex flex-col text-white items-center md:items-start'>
                    <h1 className="text-2xl font-bold mb-4">Social Links</h1>
                    <a href="#" className='mb-2 text-[#A1A1AA] hover:underline cursor-pointer flex'>
                        <div className='bg-white rounded-full w-[25px] h-[25px] flex items-center justify-center mr-2'>
                            <i className="fa-brands fa-x-twitter text-black"></i>
                        </div> 
                        <span> @CST - Twitter</span></a>

                    <a href="#" className='mb-2 text-[#A1A1AA] hover:underline cursor-pointer flex'>
                        <div className='bg-white rounded-full w-[25px] h-[25px] flex items-center justify-center mr-2'>
                            <i className="fa-brands fa-linkedin-in text-black"></i> 
                        </div>
                        <span>@CST - LinkedIn</span>
                    </a>

                    <a href="#" className='mb-2 text-[#A1A1AA] hover:underline cursor-pointer flex'>
                        <div className='bg-white rounded-full w-[25px] h-[25px] flex items-center justify-center mr-2'>
                            <i className="fa-brands fa-facebook-f text-black"></i>
                        </div>
                        <span> @CST - Facebook</span>
                    </a>

                    <a href="#" className='mb-2 text-[#A1A1AA] hover:underline cursor-pointer flex'>
                        <div className='bg-white rounded-full w-[25px] h-[25px] flex items-center justify-center mr-2'>
                            <i className="fa-solid fa-envelope text-black"></i>
                        </div>
                        <span> support@cst.com</span>
                    </a>
                </div>
            </div>

            <div className="footer-bottom w-[90%] mx-auto text-center">
                <hr />
                <p className='mt-5'><a href="https://www.linkedin.com/in/mehrababir" className='font-bold text-white'>Mehrab Jalil Abir 
                <div className='bg-white rounded-full w-[35px] h-[35px] ml-3 inline'>
                        <i className="fa-brands fa-linkedin-in text-black"></i> 
                </div>
                </a></p>
                <p className='text-white'>© 2025 . All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;