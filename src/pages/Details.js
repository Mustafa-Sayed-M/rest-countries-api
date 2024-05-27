import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import dataJson from '../data.json';

function Details() {

    const { itemName } = useParams();

    const [data, setData] = useState(null);

    const { flag, region, capital, nativeName, name, population, languages = [], borders = [], currencies = [], topLevelDomain = [], subregion } = data || {};

    useEffect(() => {
        const getDataAsync = async () => {
            try {
                dataJson.filter(i => i.name === itemName && setData(i));
            } catch (err) {
                console.log(err);
            }
        };
        getDataAsync();
    }, [itemName]);

    return (
        <div className='details-page text-[16px]'>
            <div className='container mx-auto py-10'>
                <Link to={'/'} className='block mb-10 shadow-md rounded-md p-2 px-4 w-fit dark:bg-[#2d3743]'>
                    <i className="fa-solid fa-arrow-left-long"></i>
                    <span className='ms-2'>Back</span>
                </Link>
                <div className='md:grid grid-cols-2 gap-20 items-center'>
                    {/* Item Flag */}
                    <div className='item-flag mb-7 md:mb-0'>
                        <img src={flag} alt={name} />
                    </div>
                    {/* Item Info */}
                    <div className='item-info'>
                        {/* Item Name */}
                        <h1 className='font-bold mb-7 text-2xl'>{name}</h1>
                        <div className='lists mb-10 flex items-start flex-wrap'>
                            {/* List 1 */}
                            <ul className='w-full md:w-1/2 space-y-2'>
                                <li>
                                    <span>Native Name: </span>
                                    <span className='text-gray-500'>{nativeName}</span>
                                </li>
                                <li>
                                    <span>Population: </span>
                                    <span className='text-gray-500'>{population}</span>
                                </li>
                                <li>
                                    <span>Region: </span>
                                    <span className='text-gray-500'>{region}</span>
                                </li>
                                <li>
                                    <span>Sub Region: </span>
                                    <span className='text-gray-500'>{subregion}</span>
                                </li>
                                <li>
                                    <span>Capital: </span>
                                    <span className='text-gray-500'>{capital}</span>
                                </li>
                            </ul>
                            {/* List 2 */}
                            <ul className='w-full md:w-1/2 space-y-2'>
                                <li>
                                    <span>Top Level Domain: </span>
                                    <span className='text-gray-500'>{topLevelDomain[0]}</span>
                                </li>
                                <li className='flex items-center gap-2 flex-wrap'>
                                    <span>Currencies: </span>
                                    <ul className='currencies-list flex items-center gap2'>
                                        {
                                            currencies.map((c, idx) => <li key={idx}>
                                                <span className='text-gray-500'>{c.name}</span>
                                            </li>)
                                        }
                                    </ul>
                                </li>
                                <li className='flex items-center gap-2 flex-wrap'>
                                    <span>Languages: </span>
                                    <ul className='languages-list flex items-center gap2'>
                                        {
                                            languages.map((l, idx) => <li key={idx}>
                                                <span className='text-gray-500'>{l.iso639_1}</span>
                                            </li>)
                                        }
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        {/* Border Countries */}
                        <div className='border-countries flex items-center gap-3'>
                            <h2 className='font-semibold text-xl text-nowrap'>Border Countries: </h2>
                            <ul className='flex flex-wrap items-center gap-2 gap-y-3'>
                                {
                                    borders.map((b, idx) => <li key={idx}>
                                        <span className='text-gray-500 dark:bg-[#2d3743] rounded-sm p-1 px-4 shadow-md'>{b}</span>
                                    </li>)
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details;