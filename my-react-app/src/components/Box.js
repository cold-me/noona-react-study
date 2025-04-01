import React from 'react';

const Box = (props) => {
    console.log(props);
    return (
        <div className='box'>
            <h1>box{props.num}</h1>
            <div>{props.name}</div>
        </div>
    );
};

export default Box;
