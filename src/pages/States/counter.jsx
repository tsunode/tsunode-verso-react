import { useState } from 'react';

const teste = [1, 2];
const [um, dois] = teste

const States = () => {
    const [count, setCount] = useState(0);

    console.log('Tessstess')

    function add() {
        console.log('Add')
        setCount(count + 1);
    }

    function sub() {
        console.log('Sub')
        setCount(count - 1);
    }

    return(
        <main>
            <h1>Contador: {count}</h1>
            <button onClick={add}>+</button>
            <button onClick={sub}>-</button>
        </main>
    )
}

export default States;