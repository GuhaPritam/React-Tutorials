import { useState, useEffect } from 'react';

export default function DataFetching() {
    const [condition, setCondition] = useState(false);
    const [count, setCount] = useState(0); 
    // console.log(condition)
    // console.log(count)

    const handleClick = () => {
        setCondition(!condition);
    };
    
    useEffect(() => {
        setCount(prevCount => prevCount + 1);
    }, [condition]);

    return (
        <div>
            <button onClick={handleClick}>Count {count}</button>
        </div>
    );
}
