import React from 'react';

const ProductCard = ({ item }) => {
    return (
        <>
            <img className='product-image' src={item?.img} alt='card-img' />
            <div>{item?.choice ? 'Conscious choice' : ''}</div>
            <div>{item?.title}</div>
            <div>{item?.price}</div>
            <div>{item?.new ? 'new' : ''}</div>
        </>
    );
};

export default ProductCard;
