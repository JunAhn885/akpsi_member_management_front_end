/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Sinon from 'sinon';
import axios from 'axios';
import UserService from '../userService';

jest.mock('axios');

describe('User Service Tests', () => {
  // http request parameters
  const serverUrl = 'http://localhost:8080';
  const userEndpoint = `${serverUrl}/users`;
  const user = 'Jun';

  test('addUser Axios call', async () => {
    const result = 200;
    axios.post.mockResolvedValueOnce(result);

    // when
    const axiosCall = await UserService.addUser(user);

    // then
    expect(axios.post).toHaveBeenCalledWith(`${userEndpoint}/addUser`, { name: user });
    expect(axiosCall).toEqual(result);
  });

  test('deleteUser Axios call', async () => {
    const result = [];
    axios.delete.mockResolvedValueOnce(result);

    const axiosCall = await UserService.deleteUser(user);

    expect(axios.delete).toHaveBeenCalledWith(`${userEndpoint}/deleteUser/${user}`);
    expect(axiosCall).toEqual(result);
  });

  test('getUsers Axios call', async () => {
    const result = ['Jun', 'Dan'];
    axios.get.mockResolvedValueOnce(result);

    const axiosCall = await UserService.getUsers();

    expect(axios.get).toHaveBeenCalledWith(`${userEndpoint}/getUsers`);
    expect(axiosCall).toEqual(result);
  });
});
