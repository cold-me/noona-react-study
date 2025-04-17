import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
const Books = ({ name }) => {
    const [bookList, setBookList] = useState([]);
    const getBooks = async () => {
        const url = `https://openlibrary.org/subjects/love.json`;
        const res = await fetch(url);
        const data = await res.json();
        setBookList(data);
        // console.log('ddddd', data.works);
    };
    useEffect(() => {
        getBooks();
    }, [name]);
    //

    return (
        <div>
            <div className='books-container'>
                <div className='welcome'>
                    <h3>코딩알려주는 누나 도서관</h3>
                    <div>{name}님 환영합니다!</div>
                </div>
                <div className='search'>
                    <input className='search-input' type='text' placeholder='입력해주세요' />
                    <img className='search-icon' src='https://cdn-icons-png.flaticon.com/512/954/954591.png' />
                </div>
            </div>
            <div>
                <h1>인기도서</h1>
                <Container>
                    <Row md={3}>
                        {/* {bookList.map((item, i) => (
                            <Col key={i}>
                                <div>{item.works.title}</div>
                                <div>{item.works.authors.name}</div>
                            </Col>
                        ))} */}
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Books;
