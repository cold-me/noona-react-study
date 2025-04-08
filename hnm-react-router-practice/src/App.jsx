import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import ProductAll from './pages/ProductAll';
import ProductDetail from './pages/ProductDetail';

// 1.전체 상품 페이지, 로그인 페이지, 상품 상세페이지
// 1-1. 네이베이션 바
// 2. 전체 상품 페이지:  전체 상품을 볼 수 있다.
// 3. 로그인 버튼을 누르면 로그인 페이지로 이동한다.
// 3. 상품 상세페이지를 눌렀으나, 로그인이 안되어 있을 경우에는 로그인 페이지가 먼저 나온다.
// 4. 로그인이 되어있을 경우에는, 상품 상세페이지를 볼 수 있다.
// 5. 로그아웃 버튼을 클릭하면, 로그아웃이 된다.
// 5. 로그아웃이 되면 상품 디테일 페이지를 볼 수 없다. 다시 로그인 페이지로 이동한다.
// 6. 로그인을 하면 로그아웃이 보이고, 로그아웃을 하면 로그인이 보인다.
// 7. 상품을 검색할 수 있다.
function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<ProductAll />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/product/:id' element={<ProductDetail />}></Route>
            </Routes>
        </>
    );
}

export default App;
