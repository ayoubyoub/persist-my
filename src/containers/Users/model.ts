export interface User {
  ID: number;
  FullName: string;
  Terms: string;
  Party: string;
}

export interface UserAction {
  type: string;
  payload?: any;
}
