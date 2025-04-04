import React from 'react';
import { Button } from 'react-bootstrap';

const WeatherButton = ({ cities, setCity }) => {
    return (
        <div>
            <Button variant='primary button-hover' onClick={() => setCity('current')}>
                current Location
            </Button>
            {cities.map((item) => (
                <Button className='button-hover' variant='primary' onClick={() => setCity(item)}>
                    {item}
                </Button>
            ))}
        </div>
    );
};

export default WeatherButton;
