import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
    const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성'];
    return (
        <>
            {isSidebarOpen && (
                <div className='sidebar open'>
                    <div className='sidebar-close-item'>
                        <FontAwesomeIcon icon={faXmark} onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
                    </div>
                    <ul className='sidebar-list'>
                        {menuList.map((item) => (
                            <li>{item}</li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
};

export default Sidebar;
