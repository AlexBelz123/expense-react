import { IBudget, BudgetTypes } from '../../types/budget';

export const initializeBudget = (budgets: IBudget[]) => {
  return {
    type: BudgetTypes.INITIALIZE_BUDGET,
    payload: budgets,
  };
};

export const addBudget = (budget: IBudget) => {
  return {
    type: BudgetTypes.ADD_BUDGET,
    payload: budget,
  };
};

export const removeBudget = (id: string) => {
  return {
    type: BudgetTypes.REMOVE_BUDGET,
    payload: id,
  };
};
