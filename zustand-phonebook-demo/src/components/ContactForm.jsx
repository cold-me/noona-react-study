import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import usePhoneBookStore from '../stores/usePhoneBookStore';
const Contactform = () => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const { addContact } = usePhoneBookStore();
    const handleAddContact = () => {
        if (!name.trim() || !phoneNumber.trim()) return;
        addContact(name, phoneNumber);
    };
    return (
        <>
            <Box display='flex' flexDirection='column' alignItems='center' gap={1}>
                <TextField
                    id='name'
                    label='이름'
                    variant='outlined'
                    value={name}
                    sx={{ width: '50%' }}
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    id='phone-number'
                    label='연락처'
                    variant='outlined'
                    value={phoneNumber}
                    sx={{ width: '50%' }}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <Button variant='outlined' color='gray' size='large' sx={{ width: '50%' }} onClick={handleAddContact}>
                    추가
                </Button>
            </Box>
        </>
    );
};

export default Contactform;
