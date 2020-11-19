import React from 'react';
import { render, screen } from '@testing-library/react';
 
import Signup from '../../../pages/signup/Signup';
 
describe('Test rendering of Signup page', () => {
  test('Should render Signup form', () => {
    render(<Signup />);
    screen.debug();
  });
});