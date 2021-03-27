export interface IRoutes<T> {
  path: string,
  component: T,
  exact: boolean,
};
