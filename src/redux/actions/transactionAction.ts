import { ITransaction, TransactionTypes } from '../../types/transaction';

export const initializeBudget = (transactions: ITransaction[]) => {
  return {
    type: TransactionTypes.INITIALIZE_TRANSACTIONS,
    payload: transactions,
  };
};

export const addTransaction = (budget: ITransaction) => {
  return {
    type: TransactionTypes.ADD_TRANSACTION,
    payload: budget,
  };
};

export const removeTransaction = (id: string) => {
  return {
    type: TransactionTypes.REMOVE_TRANSACTION,
    payload: id,
  };
};
