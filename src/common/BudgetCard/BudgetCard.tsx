import { FC } from 'react';
import { TransactionCard } from '../../components';
import { ITransaction } from '../../types/transaction';
import './index.scss';

interface BudgetCardProps {
  label: string;
  transactions: ITransaction[];
}

const BudgetCard: FC<BudgetCardProps> = ({ label, transactions }) => {
  return (
    <div className="card">
      <h2 className="card__title">{label}</h2>
      <div className="card__apply">
        <div className="transactions">
          {transactions.map((transaction) => (
            <TransactionCard key={transaction.id} transaction={transaction} />
          ))}
        </div>
        <a className="card__link" href="#">
          Show transactions
        </a>
      </div>
    </div>
  );
};

export default BudgetCard;
