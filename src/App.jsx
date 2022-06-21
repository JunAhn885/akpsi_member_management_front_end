/* eslint linebreak-style: ["error", "windows"] */
import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [user, setUser] = useState('');
  const [allUser, setAllUser] = useState('');

  // updates user based on the text input
  function updateUser(event) {
    setUser(event.target.value);
  }

  // updates the user in the database existing in the backend
  // when calling to the backend, we use Axios, promise-based HTTP client.
  // the syntax goes axios.<type of request>('<http protocal with function desired to call>')
  function updateUserDb(event) {
    axios.post('http://localhost:8080/addUser', { name: user });
  }

  // deleted the user in the database
  function deleteUserDb(event) {
    const newUrl = `http://localhost:8080/deleteUser/${user}`;
    axios.delete(newUrl);
  }

  // HTTP protocal, this line of code is basically like Postman,
  // calling to the get('/getUser') function in the backend
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
      <button onClick={deleteUserDb}>delete User</button>
      <p>{allUser}</p>

    </div>

  );
}

export default App;
