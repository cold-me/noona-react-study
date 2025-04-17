import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import BookDetail from './pages/BookDetail';
import Books from './pages/Books';
import Login from './pages/Login';
function App() {
    const [authenticate, setAuthenticate] = useState(false);
    const [name, setName] = useState('');
    return (
        <div className='navbar'>
            <NavBar />
            <Routes>
                <Route path='/' element={<Books name={name} />} />
                <Route path='/my-books' element={<BookDetail />} />
                <Route path='/login' element={<Login setName={setName} setAuthenticate={setAuthenticate} />} />
            </Routes>
        </div>
    );
}

export default App;
