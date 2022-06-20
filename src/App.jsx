/* eslint linebreak-style: ["error", "windows"] */
import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [user, setUser] = useState('');
  const [allUser, setAllUser] = useState('');

  function updateUser(event) {
    setUser(event.target.value);
  }

  function updateUserDb(event) {
    axios.post('http://localhost:8080/addUser', { name: user });
  }

  // HTTP protocal, this line of code is basically like Postman,
  // calling to the pp.get('/getUser') function in the backend
  useEffect(() => {
    axios.get('http://localhost:8080/getUser').then((dbUser) => {
      const userList = dbUser.data;
      setAllUser(JSON.stringify(userList));
      console.log(userList);
    });
  });

  return (
    <div>
      <input type="text" onChange={updateUser} />
      <button onClick={updateUserDb}>add User</button>
      <p>{allUser}</p>

    </div>

  );
}

export default App;
