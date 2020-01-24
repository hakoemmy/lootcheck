import * as constants from '../actions/constants';
import { read_cookie, bake_cookie } from 'sfcookies';

const BALANCE_COOKIE = 'BALANCE_COOKIE';

const balanceRe = ( state = 0, action) => {
    let balance;

    switch(action.type){
        case constants.SET_BALANCE:
           balance = action.balance;
           break;
        case constants.DEPOSIT:
            balance = state + action.deposit
            break;
        case constants.WITH_DRAW:
           balance = state - action.withdrawal
           break; 
            default: 
            balance =  parseInt(read_cookie(BALANCE_COOKIE), 10)||state;
        }
           bake_cookie(BALANCE_COOKIE, balance);
           
        return balance; 
}

export default balanceRe;