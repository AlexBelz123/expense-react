import React from 'react';
import LineChartGraph from './LineChartGraph';
import useTypedSelector from '../../hooks/useTypedSelector';
import { IBudget } from '../../types/budget';
import { ITransaction } from '../../types/transaction';
import { filterByField } from '../../utils/helpers';
import './index.scss';

export interface IBudgetGraphData {
  label: string;
  totalSpends: number;
}

const generateData = (budgets: IBudget[], transactions: ITransaction[]) => {
  const data: IBudgetGraphData[] = [];

  budgets.forEach((budget) => {
    const currentTransactions = filterByField<ITransaction, 'category'>(
      budget.id,
      'category',
      transactions
    );

    const totalSpends = currentTransactions.reduce(
      (prev, current) => prev + current.amount,
      0
    );

    data.push({ label: budget.label, totalSpends });
  });

  return data;
};

// Container behavior (can make seperate component, but I didnt do it cuz lack of time)
const Graph = () => {
  const { budgets } = useTypedSelector((store) => store.budgets);
  const { transactions } = useTypedSelector((store) => store.transactions);

  return (
    <div className="graph-container">
      <LineChartGraph data={generateData(budgets, transactions)} />
    </div>
  );
};

export default Graph;
