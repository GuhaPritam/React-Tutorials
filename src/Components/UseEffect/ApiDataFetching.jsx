import { useEffect, useState } from 'react';

export default function DataFetching() {
    const [condition, setCondition] = useState(false);
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCondition(() => !condition);
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
