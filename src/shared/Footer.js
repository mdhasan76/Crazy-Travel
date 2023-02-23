import React from 'react';
import { FaFacebook, FaYoutube, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer footer-center p-6 bg-[#1a4e7b] text-white ">
            <div>
                <p className="font-bold">
                    Tourist Hasan
                </p>
                <p>Copyright © 2022 - All right reserved</p>
            </div>
            <div>
                <div className="grid grid-flow-col gap-4">
                    <a rel="noreferrer" target='_blank' href="https://github.com/mdhasan76" className='p-2 bg-slate-300 rounded-full'>
                        <FaGithub className='text-2xl text-black' />
                    </a>
                    <a rel="noreferrer" target='_blank' href="https://youtube.com" className='p-2 bg-slate-300 rounded-full'>
                        <FaYoutube className='text-2xl text-red-600' />
                    </a>
                    <a rel="noreferrer" target='_blank' href="https://www.facebook.com/profile.php?id=100026677590809" className='p-2 bg-slate-300 rounded-full'> <FaFacebook className='text-2xl text-blue-600' /> </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;