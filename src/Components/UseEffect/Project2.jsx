import { useState, useEffect } from 'react';

export default function Counter() {
    const [counter, setCounter] = useState(0);
    const [isCounting, setCounting] = useState(false);

    const increment = () => {
        setCounter(oldValue => oldValue + 1);
    }

    const startCounting = () => {
        setCounting(true);
    };

    const stopCounting = () => {
        setCounting(false);
    };

    useEffect(() => {
        let intervalId;
        if (isCounting) {
          intervalId = setInterval(increment, 1000);
        }
        return () => clearInterval(intervalId);
      }, [isCounting]); 

    return (    
        <>
            <div>
                <h1>Counter: {counter}</h1>
                {!isCounting ? (
                    <button onClick={startCounting}>Start Counting</button>
                ) : (
                    <button onClick={stopCounting}>Stop Counting</button>
                )}
            </div>
        </>
    );
}