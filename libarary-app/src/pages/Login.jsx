import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = ({ setName, setAuthenticate }) => {
    const navigate = useNavigate();
    const loginUser = (event) => {
        event.preventDefault();
        setAuthenticate(true);
        setName('Noona');
        navigate('/');
    };
    return (
        <Container className='detail-container'>
            <Form onSubmit={(event) => loginUser(event)}>
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Label>Email 주소</Form.Label>
                    <Form.Control type='email' placeholder='Enter email' />
                </Form.Group>

                <Form.Group className='mb-3' controlId='formBasicPassword'>
                    <Form.Label>비밀번호</Form.Label>
                    <Form.Control type='password' placeholder='Password' />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                    <Form.Check type='checkbox' label='Check me out' />
                </Form.Group>
                <div className='login-btn'>
                    <Button variant='success' type='submit'>
                        로그인
                    </Button>
                </div>
            </Form>
        </Container>
    );
};

export default Login;
