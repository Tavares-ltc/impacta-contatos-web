'use client'

import { IContactData } from '@/interfaces/IContact';
import { IContactContextProps } from '@/interfaces/IContactContext';
import { IContactsPagination } from '@/interfaces/IContactsPagination';
import { IGetRoute } from '@/interfaces/IGetRoute';
import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
  } from 'react';
  
  
  const ContactContext = createContext<IContactContextProps | undefined>(
    undefined
  );
  
  export const useContactContext = () => {
    const context = useContext(ContactContext);
    if (!context) {
      throw new Error('useContactContext must be used within a ContactProvider');
    }
    return context;
  };
  
  interface IContactProviderProps {
    children: ReactNode;
  }
  
  export const ContactProvider: React.FC<IContactProviderProps> = ({ children }) => {
      const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

    const [actualPage, setActualPage] = useState<number>(1);
    const [selectedContact, setSelectedContact] = useState<IContactData | undefined>();
    const [contacts, setContacts] = useState<IContactsPagination>({ count: 0, rows: [] });
    const [getRoute, setGetRoute] = useState<IGetRoute>({route: "list", queryParams: {
        field: "",
        value: "",
        searchString: "",
        findByDate: ""
    }})

    const GET_REQUESTS = {
        list: `${API_URL}/contact?pageNumber=${actualPage - 1}&pageSize=15&sortOrder=ascending`,
        find: `${API_URL}/contact/find?field=${getRoute.queryParams.field}&value=${getRoute.queryParams.value}&pageNumber=${actualPage - 1}&pageSize=15&sortOrder=ascending`,
        search: `${API_URL}/contact/search?searchString=${getRoute.queryParams.searchString}&pageNumber=${actualPage - 1}&pageSize=15&sortOrder=ascending`,
        findByDate: `${API_URL}/contact/findByDate?dateTime=${getRoute.queryParams.findByDate}&pageNumber=${actualPage - 1}&pageSize=15&sortOrder=ascending`
    }

    useEffect(()=> {
        setActualPage(1)
    }, [getRoute])
   
    useEffect(() => {
      async function fetchData() {
        try {
          const response = await fetch(
            GET_REQUESTS[getRoute.route]
          );

          if (!response.ok) {
            throw new Error('Erro ao carregar os dados');
          }
          const jsonData = await response.json();
          setContacts(jsonData);
        } catch (error) {
          console.error(error);
        }
      }
  
      fetchData();
    }, [actualPage, getRoute]);
  
    const contextValues = {
      actualPage,
      setActualPage,
      contacts,
      setContacts,
      selectedContact,
      setSelectedContact,
      setGetRoute
    };
  
    return (
      <ContactContext.Provider value={contextValues}>
        {children}
      </ContactContext.Provider>
    );
  };
  