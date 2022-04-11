import {
  ITransaction,
  TransactionTypes,
  TransactionAction,
} from '../../types/transaction';

export interface TransactionState {
  transactions: ITransaction[];
}

const initialState: TransactionState = {
  transactions: [
    {
      id: '1t',
      label: 'Food transaction',
      date: new Date(),
      amount: 3,
      category: '1',
    },
    {
      id: '2t',
      label: 'Food 2',
      date: new Date(),
      amount: 11,
      category: '1',
    },
    {
      id: '3t',
      label: 'game 1',
      date: new Date(),
      amount: 33,
      category: '2',
    },
    {
      id: '4t',
      label: 'game 2',
      date: new Date(),
      amount: 22,
      category: '2',
    },
    {
      id: '5t',
      label: 'game 9',
      date: new Date(),
      amount: 9,
      category: '2',
    },
  ],
};

const transactionReducer = (
  state: TransactionState = initialState,
  action: TransactionAction
) => {
  switch (action.type) {
    case TransactionTypes.INITIALIZE_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload,
      };
    case TransactionTypes.ADD_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    case TransactionTypes.REMOVE_TRANSACTION:
      return {
        ...state,
        budgets: [
          ...state.transactions.filter(
            (transaction) => transaction.id !== action.payload
          ),
        ],
      };
    default:
      return state;
  }
};

export default transactionReducer;
