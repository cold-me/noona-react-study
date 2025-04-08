import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ProductCard from '../components/ProductCard';
const ProductAll = () => {
    const [productList, setProductList] = useState([]);
    const getProducts = async () => {
        const url = 'http://localhost:4000/products';
        const res = await fetch(url);
        const data = await res.json();
        setProductList(data);
        console.log(data);
    };
    useEffect(() => {
        getProducts();
    }, []);
    return (
        <div>
            <Container>
                <Row>
                    {productList.map((menu) => (
                        <Col lg={3}>
                            <ProductCard item={menu} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default ProductAll;
