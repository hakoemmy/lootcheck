import React from 'react';
import {shallow} from 'enzyme';
import { Wallet } from './wallet';
import '../setupTests';

describe('Wallet component', () => {
    const props = { balance: 20};
    
    const wallet = shallow(<Wallet {...props}/>);
    it ('renders properly', () => {
       expect(wallet).toMatchSnapshot();
    });
    it('displays balance from props',() => {
        expect(wallet.find('.balance').text()).toEqual('Wallet balance: 20');
    })
});