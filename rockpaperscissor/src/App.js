import { useState } from 'react';
import './App.css';
import Box from './components/Box';

const choice = {
    rock: {
        name: 'rock',
        img: 'https://thumb.photo-ac.com/f5/f51c9569e9602dad2dc73231ac21fd5e_t.jpeg',
    },
    scissors: {
        name: 'scissors',
        img: 'https://thumb.photo-ac.com/e1/e197a21223ddf0a1e3a56d5594d8605d_t.jpeg',
    },
    paper: {
        name: 'paper',
        img: 'https://cdn.news.hidoc.co.kr/news/photo/202003/21704_51651_0750.jpg',
    },
};
function App() {
    const [userSelect, setUserSelect] = useState(null);
    const [computerSelect, setComputerSelect] = useState(null);
    const [userResult, setUserResult] = useState('');
    const [computerResult, setComputerResult] = useState('');
    const [history, setHistory] = useState({
        youWin: 0,
        computerWin: 0,
        tie: 0,
        total: 0,
    });
    const historyArray = ['🏆 You Win:', '💻 Computer Win:', '🤝 Tie:', '📊 Total:'];
    const play = (userChoice) => {
        setUserSelect(choice[userChoice]);
        let computerChoice = randomChoice();
        setComputerSelect(computerChoice);
        let result = judgement(userChoice, computerChoice.name);
        setUserResult(result);
        setComputerResult(result === 'tie' ? result : result === 'win' ? 'lose' : 'win');
        updateHistory(result);
    };

    const updateHistory = (result) => {
        setHistory((preHistory) => {
            const newHistory = { ...preHistory };
            if (result === 'tie') newHistory.tie += 1;
            else if (result === 'win') newHistory.youWin += 1;
            else newHistory.computerWin += 1;
            newHistory.total += 1;
            return newHistory;
        });
    };

    const randomChoice = () => {
        let itemArray = Object.keys(choice);
        const randomItem = Math.floor(Math.random() * itemArray.length);
        let final = itemArray[randomItem];
        return choice[final];
    };

    const judgement = (user, computer) => {
        console.log(`user, computer : ${user}, ${computer}`);
        if (user === computer) return 'tie';
        else if (user === 'rock') return computer === 'scissors' ? 'win' : 'lose';
        else if (user === 'scissors') return computer === 'rock' ? 'lose' : 'win';
        else return computer === 'rock' ? 'win' : 'lose';
    };

    return (
        <div className='main-vertical img-bg'>
            <div className='history-box'>
                <h2>
                    {historyArray.map((item, i) => (
                        <li key={i}>
                            {item} {Object.values(history)[i]}
                        </li>
                    ))}
                </h2>
                <div className='main-horizontal'>
                    <button onClick={() => play('scissors')}>가위</button>
                    <button onClick={() => play('rock')}>바위</button>
                    <button onClick={() => play('paper')}>보</button>
                </div>
            </div>
            <div>
                <div className='main-horizontal'>
                    <Box title='you' item={userSelect} result={userResult} />
                    <Box title='computer' item={computerSelect} result={computerResult} />
                </div>
            </div>
        </div>
    );
}

export default App;
