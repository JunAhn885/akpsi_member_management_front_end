/* eslint linebreak-style: ["error", "windows"] */
import axios from 'axios';

const serverUrl = 'http://localhost:8080';
const userEndpoint = `${serverUrl}/users`;

const addUser = (user) => axios.post(`${userEndpoint}/addUser`, { name: user });

const deleteUser = (user) => axios.delete(`${userEndpoint}/deleteUser/${user}`);

const getUsers = () => axios.get(`${userEndpoint}/getUsers`);

const UserService = {
  getUsers,
  addUser,
  deleteUser,
};

export default UserService;
