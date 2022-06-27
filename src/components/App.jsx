// keep the jsx files concise as possible (only inlcude code that interacts with the UI)

import React, { useState, useEffect } from 'react';
import UserService from '../services/userService';

function App() {
  const [user, setUser] = useState('');
  const [allUsers, setAllUsers] = useState('');

  const updateUser = (event) => {
    setUser(event.target.value);
  };

  const addUserDb = async () => {
    await UserService.addUser(user);

    const dbUser = await UserService.getUsers();
    const userList = dbUser.data;
    setAllUsers(JSON.stringify(userList));
  };

  const deleteUserDb = async () => {
    await UserService.deleteUser(user);

    const dbUser = await UserService.getUsers();
    const userList = dbUser.data;
    setAllUsers(JSON.stringify(userList));
  };

  useEffect(() => {
    UserService.getUsers().then((dbUser) => {
      const userList = dbUser.data;
      setAllUsers(JSON.stringify(userList));
    });
  }, []);

  return (
    <div data-testid="app-root">
      <input type="text" data-testid="user-input-box" onChange={updateUser} />
      <button type="button" onClick={addUserDb}>add User</button>
      <button type="button" onClick={deleteUserDb}>delete User</button>
      <p>{allUsers}</p>
    </div>
  );
}

export default App;
