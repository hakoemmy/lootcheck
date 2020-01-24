import balanceReducer from './balance';
import * as constants from '../actions/constants';
import { bindActionCreators } from 'redux';

describe('Balance Reducer', () => {
   
    it ('sets balance', ()=> {
        const balance = 10;
        
        expect(balanceReducer(undefined, {
            type: constants.SET_BALANCE,
            balance
        })).toEqual(balance);
    })
});