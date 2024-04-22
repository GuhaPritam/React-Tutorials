import { useRef } from 'react';

export default function Project1() {
    let inputRef = useRef(null)

    function handelClick() {
        inputRef.current.value = '100';
        inputRef.current.style.color = 'red';
    }

    return (
        <>
            <div>
                <input type="text" ref={inputRef} />
                <button onClick={handelClick}>Handel Input</button>
            </div>
        </>
    );
}