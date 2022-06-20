import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

const serverUrl = 'http://localhost:8080';

function App() {
  const [user, setUser] = useState('');
  const [allUser, setAllUser] = useState('');

  const updateUser = (event) => {
    setUser(event.target.value);
  };

  const updateUserDb = () => {
    axios.post(`${serverUrl}/addUser`, { name: user });
    // TODO: Show user confirmation for update
  };

  const deleteUserDb = () => {
    const newUrl = `${serverUrl}/deleteUser/${user}`;
    axios.delete(newUrl);
    // TODO: Show user confirmation for delete
  };

  useEffect(() => {
    axios.get(`${serverUrl}/getUser`).then((dbUser) => {
      const userList = dbUser.data;
      setAllUser(JSON.stringify(userList));
    });
  });

  return (
    <div>
      <input type="text" onChange={updateUser} />
      <button type="button" onClick={updateUserDb}>add User</button>
      <button type="button" onClick={deleteUserDb}>delete User</button>
      <p>{allUser}</p>
    </div>

  );
}

export default App;
