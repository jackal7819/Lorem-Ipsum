import { data } from './data';
import { useState } from 'react';

const App = () => {
    const [count, setCount] = useState(1);
    const [text, setText] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const amount = parseInt(count);
        setText(data.slice(0, amount));
    }

    return (
        <section className='section-center'>
            <h4>A Journey of Video Game Consoles</h4>
            <form className='lorem-form' onSubmit={handleSubmit}>
                <label htmlFor='amount'>stories:</label>
                <input
                    type='number'
                    name='amount'
                    id='amount'
                    min='1'
                    step='1'
                    max='8'
                    value={count}
                    onChange={(event) => setCount(event.target.value)}
                />
                <button className='btn' type='submit'>
                    generate
                </button>
            </form>
            <div>{text.map(item => 
                <article className='lorem-text' key={item}>{item}</article>
            )}</div>
        </section>
    );
};

export default App;
