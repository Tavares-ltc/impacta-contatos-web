import { IContactData } from "./IContact";

export interface IContactsPagination {
    count: number;
    rows: IContactData[];
  };