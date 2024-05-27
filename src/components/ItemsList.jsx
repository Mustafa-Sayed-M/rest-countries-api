import React from 'react';
import ItemCard from './ItemCard';

function ItemsList({ itemsList }) {
    if (itemsList.length === 0) {
        return <div className='items-list-empty'>No items found</div>
    }
    return (
        <div className='items-list'>
            <div className='items-list-wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                    itemsList.map((item, idx) => <ItemCard item={item} key={idx} />)
                }
            </div>
        </div>
    )
}

export default ItemsList;