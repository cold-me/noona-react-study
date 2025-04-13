import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Grid from '@mui/material/Grid';
import './App.css';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
function App() {
    return (
        <div className='container'>
            <h1>
                PhoneBook
                <FontAwesomeIcon icon={faAddressBook} />
            </h1>
            <Grid container spacing={2}>
                <Grid size={6}>
                    <ContactForm />
                </Grid>
                <Grid size={6}>
                    <ContactList />
                </Grid>
            </Grid>
            <div></div>
        </div>
    );
}

export default App;
