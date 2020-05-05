import {IConfig} from '../../models/user.interface';

export interface IConfigState {
  config: IConfig;
}

export const initialConfigState: IConfigState = {
  config: null,
};
