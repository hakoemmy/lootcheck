import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import '../setupTests';

describe('App component', () => {
   const app = shallow(<App />);

   it ('renders properly', () =>{
       expect(app).toMatchSnapshot();
   })
});