import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
const ProductAll = () => {
    const [productList, setProductList] = useState([]);
    const [query, _] = useSearchParams();
    const getProducts = async () => {
        const searchQuery = query.get('q') || '';
        const url = `https://json-server-vercel-xi-seven.vercel.app/products?q=${searchQuery}`;
        const res = await fetch(url);
        const data = await res.json();
        setProductList(data);
        console.log(data);
    };
    useEffect(() => {
        getProducts();
    }, [query]);
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
