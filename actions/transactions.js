// transactions.js
import { v4 as uuidv4 } from 'uuid';

export const sellMilk = (transaction) => ({
  type: 'SELL_MILK',
  payload: {
    id: uuidv4(),
    shop: transaction.shop,
    amount: transaction.amount,
    price: (parseFloat(transaction.amount)* 50).toFixed(2),
    time: new Date().toISOString(),
    
  },
});

export const getMilk = (transaction) => ({
  type: 'GET_MILK',
  payload: {
    id: uuidv4(),
    shop: transaction.shop,
    amount: transaction.amount,
    time: new Date().toISOString(),
  },
});

export const depositMilk = (transaction) => ({
  type: 'DEPOSIT_MILK',
  payload: {
    id: uuidv4(),
    shop: transaction.shop,
    time: new Date().toISOString(),
    amount: transaction.amount,
  },
});