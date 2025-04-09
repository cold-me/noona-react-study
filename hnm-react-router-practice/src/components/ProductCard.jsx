import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ item }) => {
    const navigate = useNavigate();
    const showDetail = () => {
        navigate(`/product/${item.id}`);
    };
    return (
        <>
            <img className='product-image' onClick={showDetail} src={item?.img} alt='card-img' />
            {item?.choice ? <div className='choice-text'>Conscious choice</div> : ''}
            <div>{item?.title}</div>
            <div>{item?.price}won</div>
            {item?.new ? <div className='new-text'>new</div> : ''}
        </>
    );
};

export default ProductCard;
