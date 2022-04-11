import React from 'react';
import { BudgetCard } from '../common';
import { Modal, Button } from '../components';
import useTypedSelector from '../hooks/useTypedSelector';
import { filterByField } from '../utils/helpers';
import { ITransaction } from '../types/transaction';
import useToggle from '../hooks/useToggle';
import './index.scss';

const BadgetContainer = () => {
  const { budgets } = useTypedSelector((store) => store.budgets);
  const { transactions } = useTypedSelector((store) => store.transactions);
  const [isOpen, toggle] = useToggle();

  // add category modal here

  return (
    <div className="container">
      <Button label="Add badget" onClick={toggle} />
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
      <Modal isOpen={isOpen} close={toggle}>
        Some modal content
      </Modal>
    </div>
  );
};

export default BadgetContainer;
