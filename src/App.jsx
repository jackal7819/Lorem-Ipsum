import { data } from './data';
import { nanoid } from 'nanoid';
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
            <article className='lorem-text'>{text.map(item => 
                <p key={nanoid()}>{item}</p>
            )}</article>
        </section>
    );
};

export default App;
