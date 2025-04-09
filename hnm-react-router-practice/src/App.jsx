import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Login from './pages/Login';
import ProductAll from './pages/ProductAll';
import PrivateRouter from './routes/PrivateRouter';

function App() {
    const [authenticate, setAuthenticate] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        console.log('authenticate:', authenticate);
    }, [authenticate]);
    return (
        <>
            <div className='menu-icon'>
                <FontAwesomeIcon icon={faBars} onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
                <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
            </div>
            <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
            <Routes>
                <Route path='/' element={<ProductAll />} />
                <Route path='/login' element={<Login setAuthenticate={setAuthenticate} />} />
                <Route path='/product/:id' element={<PrivateRouter authenticate={authenticate} />} />
            </Routes>
        </>
    );
}

export default App;
