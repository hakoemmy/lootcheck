 import * as constants from './constants';
 import * as actions from './balance';

 describe('Loot check account actions', () =>{
   it ('creates action creator to set balance ', () => {
      const balance = 0;
      const expectedAction = 
      { type: constants.SET_BALANCE,
           balance};
      expect(actions.setBalance(balance)).toEqual(expectedAction);
          
   })
   it ('creates action creator to deposit', () =>{
      const deposit = 10;
      const expectedAction = {
         type: constants.DEPOSIT,
         deposit
      }
      expect(actions.deposit(deposit)).toEqual(expectedAction);
   })

   it ('creates an action creator to withdraw amount', () =>{
      const withdrawal = 8;
      const expectedAction = {
         type: constants.WITH_DRAW,
         withdrawal
      }
      expect(actions.withdraw(withdrawal)).toEqual(expectedAction);
   })
 })
 