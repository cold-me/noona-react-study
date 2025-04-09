import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import DropDownList from '../components/DropDownList';
const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const getProductDetail = async () => {
        const url = `https://json-server-vercel-xi-seven.vercel.app/products/${id}`;
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        setProduct(data);
    };
    useEffect(() => {
        getProductDetail();
    }, []);
    return (
        <Container>
            <Row>
                <Col className='detail-img'>
                    <img src={product?.img} />
                </Col>
                <Col className='detail-container'>
                    <div className='choice-text'>{product?.choice ? 'Conscious choice' : ''}</div>
                    <div>{product?.title}</div>
                    <div>₩ {product?.price}</div>
                    <DropDownList />
                    <Button variant='dark' className='add-shopping-box-btn'>
                        장바구니 추가
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetail;
