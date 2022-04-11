import React from 'react';
import { BudgetCard } from '../common';
import useTypedSelector from '../hooks/useTypedSelector';
import { filterByField } from '../utils/helpers';
import { ITransaction } from '../types/transaction';
import './index.scss';

const BadgetContainer = () => {
  const { budgets } = useTypedSelector((store) => store.budgets);
  const { transactions } = useTypedSelector((store) => store.transactions);

  return (
    <div className="cards">
      {budgets.map(({ id, label }) => (
        <BudgetCard
          key={id}
          label={label}
          transactions={filterByField<ITransaction, 'category'>(
            id,
            'category',
            transactions
          )}
        />
      ))}
    </div>
  );
};

export default BadgetContainer;
