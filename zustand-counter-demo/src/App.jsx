import './App.css';
import counterStore from './stores/countStore';
function App() {
    // const [count, setState] = useState(0);
    const { count, increase, decrease, increaseBy, history } = counterStore();
    const getNumber = (e) => {
        if (e.key === 'Enter') {
            const number = Number(e.target.value);
            increaseBy(number);
        }
    };
    return (
        <div className='container'>
            <div className='simple-container'>
                <div>
                    <h1>간단 계산기</h1>
                    {/* <CountBox count={count} /> */}
                    <h2>count: {count}</h2>
                </div>
                <div>
                    <button onClick={increase}>increase 1</button>
                    <button onClick={decrease}>decrease 1</button>
                    <button onClick={() => increaseBy(10)}>increase 10</button>
                    <button onClick={() => increaseBy(20)}>increase 20</button>
                    <input
                        className='simple-input'
                        onKeyPress={(e) => getNumber(e)}
                        type='text'
                        placeholder='수를 입력하고 Enter!'
                    />
                </div>
                <h2>계산기록</h2>
                <div className='history-box'>
                    <ul>
                        {history?.map((item, i) => (
                            <span key={i}>{item}</span>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default App;
