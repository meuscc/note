export interface Nav {
  name: string;
  path: string;
  icon?: any;
  component: any;
  children?: Nav[];
}
