import { useState } from 'react';

const States = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [users, setUsers] = useState([]);

    console.log('teste');
  
    function handleSubmit(event) {
        event.preventDefault();

        console.log(name, email);

        const newUser = {
            name, 
            email
        };

        setUsers([...users, newUser])
    }

    return(
        <main>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    onChange={(event) => setName(event.target.value)} 
                />
                <input 
                    type="email"
                    onChange={(event) => setEmail(event.target.value)} 
                 />
                <button type='submit'>Registrar</button>
            </form>

            <ul>
                {
                    users.map((user, index) => 
                        <li key={index}>{user.name} - {user.email}</li>
                    )
                }
            </ul>
        </main>
    )
}

export default States;