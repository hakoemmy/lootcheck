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

    it ('creates input to deposit or withraw from wallet', () =>{
        expect(wallet.find('.input-wallet').exists()).toBe(true);
    })

    describe('When user types in wallet input', () => {
        const userInput = '26';

      beforeEach( () => {
          wallet.find('.input-wallet')
          .simulate('change', {target : { value: userInput}})
      })

      it('updates local wallet in ` state` and converts into number', () =>{

        expect(wallet.state().balance).toEqual(parseInt(userInput, 10));
      })

    });
});