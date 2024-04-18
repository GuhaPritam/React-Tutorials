import { useState, useEffect } from 'react';

export default function DataFetching() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUser(data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    return (
        <>
            <div>
                <h1>User List</h1>
                <ul>
                    {user.map(user => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            </div>
        </>
    );
}