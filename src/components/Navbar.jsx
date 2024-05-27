import React from 'react';
import { Link } from 'react-router-dom';
import TogglerMood from './TogglerMood';

function Navbar() {
    return (
        <nav className='shadow-md dark:bg-[#2d3743]'>
            <div className='container mx-auto h-[60px] flex items-center justify-between'>
                <Link to={'/'} className='font-bold text-xl'>
                    <h1>Where in the world?</h1>
                </Link>
                <TogglerMood />
            </div>
        </nav>
    )
}

export default Navbar;