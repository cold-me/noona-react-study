import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const DropDownList = () => {
    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle variant='danger' id='dropdown-basic'>
                    사이즈 선택
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href='#/action-1'>S</Dropdown.Item>
                    <Dropdown.Item href='#/action-2'>M</Dropdown.Item>
                    <Dropdown.Item href='#/action-3'>L</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};

export default DropDownList;
