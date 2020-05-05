export interface IUser {
  id: number;
  name: string;
  cardNumber: string;
  cardType: string;
}

export interface IConfig {
  adminName: string;
  permissions?: string[];
}
