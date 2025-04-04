import React from 'react';
import { Button } from 'react-bootstrap';

const WeatherButton = ({ cities, setCity }) => {
    return (
        <div className='vertical-box'>
            <Button variant='light button-hover' onClick={() => setCity('current')}>
                current Location
            </Button>
            <div className='horizontal-box'>
                {cities.map((item) => (
                    <Button key={item} className='button-hover' variant='primary' onClick={() => setCity(item)}>
                        {item}
                    </Button>
                ))}
            </div>
        </div>
    );
};

export default WeatherButton;
