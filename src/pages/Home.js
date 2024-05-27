import React, { useEffect, useState } from 'react';
import ItemsList from '../components/ItemsList';
import NavFilter from '../components/NavFilter';
import dataJson from '../data.json';

function Home() {

    const [data, setData] = useState(null);
    const [region, setRegion] = useState(null);
    const [search, setSearch] = useState(null);

    useEffect(() => {
        const getDataAsync = async () => {
            try {
                if (region && search) {
                    setData(dataJson.filter(i => i.region === region && i.name.includes(search)));
                } else if (region) {
                    setData(dataJson.filter(i => i.region === region));
                } else if (search) {
                    setData(dataJson.filter(i => i.name.includes(search)));
                } else {
                    setData(dataJson);
                }
            } catch (err) {
                console.log(err);
            }
        };
        getDataAsync();
    }, [region, search]);

    const handleSearch = (e) => {
        const value = e.target.value;
        if (value) {
            setSearch(value);
        } else {
            setSearch(null);
        }
    };

    const handleRegion = (e) => {
        const value = e.target.value;
        if (value) {
            setRegion(value);
        } else {
            setRegion(null);
        }
    };

    return (
        <div className='home-page text-[14px]'>
            <div className='container mx-auto py-10'>
                <NavFilter handleSearch={handleSearch} handleRegion={handleRegion} />
                <ItemsList itemsList={data || []} />
            </div>
        </div>
    )
}

export default Home;