import balanceReducer from './balance';
import balanceReducer2 from './balance';
import * as constants from '../actions/constants';

describe('Balance Reducer', () => {
    
    describe('when initialising', ()=> {
        const balance = 10;
     it ('sets balance', ()=> {
        expect(balanceReducer(undefined, {
            type: constants.SET_BALANCE,
            balance
        })).toEqual(balance);
      })
      describe('then re-initialising', () => {
          it('Reads the balance from cookies', () => {
           expect(balanceReducer2(undefined, {})).toEqual(balance);
          })
      })
       
   })

    it ('deposits into balance', () => {
        const initialState = 5;
        const deposit = 10;
        expect(balanceReducer(initialState, {
            type: constants.DEPOSIT,
            deposit
        })).toEqual(initialState + deposit);
    })

    it('withdraws amount from balance', () => {
        const initialState = 10;
        const withdrawal = 3;
        expect(balanceReducer(initialState, {
            type: constants.WITH_DRAW,
            withdrawal
        })).toEqual(initialState - withdrawal);
    })

});