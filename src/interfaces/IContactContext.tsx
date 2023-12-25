import { IContactData } from "./IContact";
import { IContactsPagination } from "./IContactsPagination";
import { IGetRoute } from "./IGetRoute";

export interface IContactContextProps {
    actualPage: number;
    setActualPage: React.Dispatch<React.SetStateAction<number>>;
    contacts: IContactsPagination
    setContacts: React.Dispatch<React.SetStateAction<IContactsPagination>>;
    selectedContact: IContactData | undefined,
    setSelectedContact: React.Dispatch<React.SetStateAction<IContactData | undefined>>;
    setGetRoute: React.Dispatch<React.SetStateAction<IGetRoute>>;
  }