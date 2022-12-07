import React from 'react';
import { render } from '@testing-library/react';
import HomePage from '../components/header';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import { MemoryRouter as Router } from 'react-router-dom';

it('It should render the homepage components correctly', () => {
    const homepage = render(
        <Router>
            <Provider store={store}>
                <HomePage />
            </Provider>
        </Router>,
    );
    expect(homepage).toMatchSnapshot();
});