import balanceReducer from './balance';
import * as constants from '../actions/constants';

describe('Balance Reducer', () => {
   
    it ('sets balance', ()=> {
        const balance = 10;
        
        expect(balanceReducer(undefined, {
            type: constants.SET_BALANCE,
            balance
        })).toEqual(balance);
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