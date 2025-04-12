import React from 'react';
import counterStore from '../stores/countStore';

const CountBox = () => {
    const { count } = counterStore();
    return <h1>CountBox:{count}</h1>;
};

export default CountBox;
