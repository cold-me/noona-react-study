import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ item }) => {
    const navigate = useNavigate();
    const showDetail = () => {
        navigate(`/product/${item.id}`);
    };
    return (
        <>
            <img className='product-image' onClick={showDetail} src={item?.img || <div />} alt='card-img' />
            <div className='product-text'>
                {item?.new ? <div className='new-text'>new</div> : <div />}
                {item?.choice ? <div className='choice-text'>Conscious choice</div> : <div />}
                <div>{item?.title}</div>
                <div className='product-price'>{item?.price}won</div>
            </div>
        </>
    );
};

export default ProductCard;
