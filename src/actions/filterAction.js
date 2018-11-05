import { FILTER_BY_CATEGORY, FILTER_BY_NAME } from '../actions/types';

export const filterByCategory = payload => ({
  type: FILTER_BY_CATEGORY,
  payload
});

export const filterByName = payload => ({
  type: FILTER_BY_NAME,
  payload
});

