import { RouterReducerState } from '@ngrx/router-store';

import {IUserState} from './user.state';
import {IConfigState} from './config.state';


export interface IAppState {
  users: IUserState;
  config: IConfigState;
  router?: RouterReducerState;
}

export const initialAppState: IAppState = {
  users: null,
  config: null,
};

export function getInitialState(): IAppState {
  return initialAppState;
}
