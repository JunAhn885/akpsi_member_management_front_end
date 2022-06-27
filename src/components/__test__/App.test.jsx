/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Sinon from 'sinon';
import App from '../App';
import UserService from '../../services/userService';

describe('App Tests', () => {
  beforeEach(() => {
    Sinon.stub(UserService, 'getUsers').resolves({ data: ['test-user'] });
  });

  afterEach(() => {
    Sinon.restore();
  });

  test('App renders', async () => {
    const container = await waitFor(() => render(<App />));
    expect(container.queryByTestId('app-root')).toBeInTheDocument();
  });

  test('Add user to DB', async () => {
    const addUserStub = Sinon.stub(UserService, 'addUser').resolves();

    const container = await waitFor(() => render(<App />));
    const user = userEvent.setup();

    const input = container.getByTestId('user-input-box');
    await user.type(input, 'jun');

    const addUserButton = container.getByText('add User');
    await user.click(addUserButton);

    addUserStub.should.have.been.calledWith('jun');
  });

  test('Delete user to DB', async () => {
    // stubbing takes full control of the method
    // resolves() will fulfill the promise
    const deleteuserStub = Sinon.stub(UserService, 'deleteUser').resolves();

    // you would want new clean container everytime for each test
    // because we have an async function in our useEffect that
    // runs when our app renders, we use waitFor to wait until
    // that call has completed before rendering our app (for testing purposes)
    const container = await waitFor(() => render(<App />));
    // creating mock user. In this case, mock user is the computer
    const user = userEvent.setup();

    // reference to the input box container
    // hierarchy of the refence is what the user actually sees
    const input = container.getByTestId('user-input-box');
    // making the mock user type in 'jun' to the text box
    await user.type(input, 'jun');

    // reference to the delete user button
    const deleteUserButton = container.getByText('delete User');
    await user.click(deleteUserButton);

    // actual testing
    deleteuserStub.should.have.been.calledWith('jun');
  });
});
