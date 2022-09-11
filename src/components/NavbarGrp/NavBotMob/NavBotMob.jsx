import React from 'react';
import { BiHomeCircle } from 'react-icons/bi'
import { GiKnifeFork } from 'react-icons/gi'
import { HiAcademicCap } from 'react-icons/hi'
import { IoIosContact } from 'react-icons/io'
const NavBotMob = () => {
    return (
        <>
            <nav className="navbar d-lg-none d-flex justify-content-around bg-white border-top border-2 fixed-bottom container-fluid" id="navbar">
                <div className='d-flex border p-1 rounded-4 shadow-lg bg-white '>
                    <BiHomeCircle size={30} className='bg-white text-danger' />

                </div>
                <div className='d-flex border p-1 rounded-4 shadow-lg bg-white '>
                    <HiAcademicCap size={30} className='bg-white text-danger' />
                    {/* faut trouver une loupe */}

                </div>
                <div className='d-flex border p-1 rounded-4 shadow-lg bg-white '>
                    <GiKnifeFork size={30} className='bg-white text-danger' />

                </div>
                <div className='d-flex border p-1 rounded-4 shadow-lg bg-white '>
                    <IoIosContact size={30} className='bg-white text-danger' />

                </div>
            </nav>
        </>
    );
};

export default NavBotMob;