import { useEffect, useState } from 'react';

export default function Count() {
    const [count, setCount] = useState(0);

    const timeOut = () => {
        setCount(oldValue => oldValue + 1); 1000
    };

    useEffect(() => {
        let timer = setTimeout(timeOut, 1000);
        return () => clearTimeout(timer)    
    }, []);

    return (
        <>
            <div>
                <h1>I have rendered {count} times!</h1>
            </div>
        </>
    );
}