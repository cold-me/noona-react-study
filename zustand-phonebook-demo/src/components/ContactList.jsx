import DeleteIcon from '@mui/icons-material/Delete';
import { Avatar, IconButton, List, ListItem, ListItemAvatar, ListItemText, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { default as React, useEffect, useState } from 'react';
import usePhoneBookStore from '../stores/usePhoneBookStore';

const Demo = styled('div')(({ theme }) => ({
    backgroundColor: (theme.vars || theme).palette.background.paper,
}));
const ContactList = () => {
    const { phoneBook, deleteContact } = usePhoneBookStore();
    const [keyword, setKeyword] = useState('');
    const [searchedList, setSearchedList] = useState([]);

    useEffect(() => {
        const filtered = phoneBook.filter((item) => item.name.includes(keyword.trim()));
        setSearchedList(filtered);
    }, [keyword, phoneBook]);
    return (
        <div>
            <TextField
                id='name'
                label='검색'
                placeholder='이름을 입력하세요'
                variant='standard'
                value={keyword}
                sx={{ width: '90%' }}
                onChange={(e) => setKeyword(e.target.value)}
            />
            <Demo>
                <List>
                    {searchedList.length === 0
                        ? '연락처가 없습니다'
                        : searchedList.map((item) => (
                              <ListItem
                                  secondaryAction={
                                      <IconButton edge='end' aria-label='delete'>
                                          <DeleteIcon onClick={() => deleteContact(item.id)} />
                                      </IconButton>
                                  }
                              >
                                  <ListItemAvatar>
                                      <Avatar>{item.name[0]}</Avatar>
                                  </ListItemAvatar>
                                  <ListItemText primary={item.name} secondary={item.phoneNumber} />
                              </ListItem>
                          ))}
                </List>
            </Demo>
        </div>
    );
};

export default ContactList;
