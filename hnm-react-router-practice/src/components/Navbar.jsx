import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
const Navbar = () => {
    const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성'];
    return (
        <div>
            <div>
                <div className='login-button'>
                    <FontAwesomeIcon icon={faUser} />
                    <div>Login</div>
                </div>
            </div>
            <div className='nav-section'>
                <img
                    width={100}
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWxzF7ValZVpOSk3lDkD52SJLipvmhaXfpAw&s'
                />
            </div>
            <div className='menu-area'>
                <ul className='menu-list'>
                    {menuList.map((item) => (
                        <li>{item}</li>
                    ))}
                </ul>
                <div className='search-area'>
                    <FontAwesomeIcon icon={faSearch} />
                    <input className='search-input' type='text' placeholder='제품을 검색해주세요'></input>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
