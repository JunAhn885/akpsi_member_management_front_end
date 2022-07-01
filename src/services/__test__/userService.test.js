/* eslint linebreak-style: ["error", "windows"] */
import Sinon from 'sinon';
import axios from 'axios';
import UserService from '../userService';

// jest.mock('axios');

describe('User Service Tests', () => {
  // http request parameters
  const serverUrl = 'http://localhost:8080';
  const userEndpoint = `${serverUrl}/users`;
  const user = 'Jun';

  test('addUser Axios call', async () => {
    const sinonPost = Sinon.stub(axios, 'post').resolves();
    UserService.addUser(user);
    sinonPost.should.have.been.calledWith(`${userEndpoint}/addUser`, { name: user });
  });

  test('deleteUser Axios call', async () => {
    const sinonDelete = Sinon.stub(axios, 'delete').resolves();
    UserService.deleteUser(user);
    sinonDelete.should.have.been.calledWith(`${userEndpoint}/deleteUser/${user}`);
  });

  test('getUsers Axios call', async () => {
    const sinonGet = Sinon.stub(axios, 'get').resolves();
    UserService.getUsers();
    sinonGet.should.have.been.calledWith(`${userEndpoint}/getUsers`);
  });
});
