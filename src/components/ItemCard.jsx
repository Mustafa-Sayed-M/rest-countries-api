import React from 'react';
import { Link } from 'react-router-dom';

function ItemCard({ item }) {

    const { flag, name, region, population, capital } = item;

    return (
        <Link to={`/details/${name}`} className='item-card rounded-md shadow-md block dark:bg-[#2d3743] overflow-hidden group'>
            <div className='item-flag mb-4 h-40'>
                <img src={flag} alt='item-flag' className='rounded-t-md w-full h-full object-cover transition duration-300 ease-in-out group-hover:scale-125 group-hover:rotate-2' />
            </div>
            <div className='item-info p-3'>
                <h2 className='font-semibold text-xl mb-3'>{name}</h2>
                <ul className='space-y-2'>
                    <li>
                        <span className='font-medium'>Population: </span>
                        <span className='text-gray-500'>{population}</span>
                    </li>
                    <li>
                        <span className='font-medium'>Region: </span>
                        <span className='text-gray-500'>{region}</span>
                    </li>
                    <li>
                        <span className='font-medium'>Capital: </span>
                        <span className='text-gray-500'>{capital}</span>
                    </li>
                </ul>
            </div>
        </Link>
    )
}

export default ItemCard;