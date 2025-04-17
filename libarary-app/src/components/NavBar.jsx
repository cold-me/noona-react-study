import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const gotoMenu = (slug) => {
        navigate(`${slug}`);
    };
    const menuList = [
        { label: '메인', slug: '/' },
        { label: '나의책', slug: 'my-book' },
        { label: '로그인', slug: 'login' },
    ];
    return (
        <div>
            <div className='sub-navbar'>
                <h1 className='sub-navbar-logo'>코딩알려주는 누나 도서관</h1>
                <div className='sub-navbar-menu right'>
                    {menuList.map((item, i) => (
                        <div key={i} onClick={() => gotoMenu(item.slug)}>
                            {item.label}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
