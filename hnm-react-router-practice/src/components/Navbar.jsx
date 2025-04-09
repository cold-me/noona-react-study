import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Navbar = ({ authenticate, setAuthenticate }) => {
    const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성'];
    const navigate = useNavigate();
    const goToLogin = () => navigate('/login');
    const goToHome = () => navigate('/');
    const goToLogout = () => {
        setAuthenticate(false);
        navigate('/');
    };
    const search = (event) => {
        if (event.key === 'Enter') {
            const keyword = event.target.value;
            navigate(`/?q=${keyword}`);
        }
    };
    useEffect(() => {
        console.log('authenticate:', authenticate);
    }, [authenticate]);
    return (
        <div className='nav'>
            <div className='login-section'>
                <FontAwesomeIcon icon={faUser} />
                {authenticate ? (
                    <div className='padding-10px' onClick={goToLogout}>
                        로그아웃
                    </div>
                ) : (
                    <div className='padding-10px' onClick={goToLogin}>
                        로그인
                    </div>
                )}
            </div>
            <div className='nav-section'>
                <img
                    width={100}
                    onClick={goToHome}
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWxzF7ValZVpOSk3lDkD52SJLipvmhaXfpAw&s'
                />
            </div>
            <div className='menu-area'>
                <ul className='menu-list'>
                    {menuList.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
                <div className='search-area'>
                    <FontAwesomeIcon icon={faSearch} />
                    <input
                        onKeyPress={(event) => search(event)}
                        className='search-input'
                        type='text'
                        placeholder='제품을 검색해주세요'
                    ></input>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
