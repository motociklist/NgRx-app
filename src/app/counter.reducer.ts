import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, appdate577} from './counter.actions';

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,

  on(appdate577, (state) => 577),
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);

