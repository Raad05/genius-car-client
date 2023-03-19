import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShopping, AiOutlineSearch } from 'react-icons/ai';
import logo from '../../../assets/logo.svg';

const Header = () => {
    return (
        <div className='navbar flex justify-around p-5'>
            <Link><img src={logo} alt="img" className='w-20' /></Link>
            <div className='nav-items'>
                <Link className='p-3 text-gray-500 font-bold'>Home</Link>
                <Link className='p-3 text-gray-500 font-bold'>About</Link>
                <Link className='p-3 text-gray-500 font-bold'>Services</Link>
                <Link className='p-3 text-gray-500 font-bold'>Blog</Link>
                <Link className='p-3 text-gray-500 font-bold'>Contact</Link>
            </div>
            <div className='appointment'>
                <AiOutlineShopping className='m-2' size={25}></AiOutlineShopping>
                <AiOutlineSearch className='m-2' size={25}></AiOutlineSearch>
                <Link className='mx-3 px-5 py-3 text-lg border-2 border-orange-500 rounded text-orange-500 font-boldgit'>Appointment</Link>
            </div>
        </div>
    );
};

export default Header;