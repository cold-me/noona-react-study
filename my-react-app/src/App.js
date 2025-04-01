import { useState } from 'react';
import './App.css';
import './components/Box';
import Box from './components/Box';

function App() {
    let counter = 0;
    const [counter2, setCounter2] = useState(0);
    const increase = () => {
        counter += 1;
        setCounter2(counter2 + 1);
        console.log('counter:', counter, 'counter2:', counter2);
    };
    return (
        <>
            <div>
                <div>{counter}</div>
                <div>{counter2}</div>
                <button onClick={increase}>click!</button>
            </div>
            <div>
                <Box name='Jenny' num={1} />
                <Box name='Rose' num={2} />
            </div>
        </>
    );
}

export default App;
