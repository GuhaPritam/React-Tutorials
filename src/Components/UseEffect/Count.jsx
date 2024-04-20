import { useEffect, useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);
    const[canculation, setCalculation] = useState(0)

    function handelClick() {
        setCount(prevCount => prevCount + 1);
    }

    useEffect(() => {
        setCalculation(count * 2);
    }, [count]);

    return (
        <>
            <p>Count: {count}</p>
            <button onClick={handelClick}>+</button>
            <p>Calculation: {canculation}</p>
        </>
    );
}