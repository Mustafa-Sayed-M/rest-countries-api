import React from 'react';

function NavFilter({ handleSearch, handleRegion }) {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className='nav-filter mb-7 flex flex-col md:flex-row gap-5 md:items-center justify-between'>
            <form className='filter-search shadow-md rounded-md dark:bg-[#2c3743] w-full md:w-80 relative ps-8' onSubmit={handleSubmit}>
                <button type='button' className='w-5 h-5 absolute top-1/2 -translate-y-1/2 start-3 text-gray-600 dark:text-white'>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
                <input
                    id='filter-search'
                    type='search'
                    className='p-2 rounded-md focus:outline-none w-full bg-transparent'
                    placeholder='Search for a country...'
                    onChange={handleSearch}
                />
            </form>
            <select id='filter-region' onChange={handleRegion} className='filter-region shadow-md rounded-md dark:bg-[#2c3743] focus:outline-none p-2 w-60'>
                <option value={''}>Filter by Region</option>
                <option value={'Africa'}>Africa</option>
                <option value={'Americas'}>America</option>
                <option value={'Asia'}>Asia</option>
                <option value={'Europe'}>Europe</option>
                <option value={'Oceania'}>Oceania</option>
            </select>
        </div>
    )
}

export default NavFilter;