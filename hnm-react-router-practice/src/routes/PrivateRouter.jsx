import React from 'react';
import { Navigate } from 'react-router-dom';
import ProductDetail from '../pages/ProductDetail';
const PrivateRouter = ({ authenticate }) => {
    return authenticate ? <ProductDetail /> : <Navigate to={'/login'} />;
};

export default PrivateRouter;
