'use client'

import style from '@/_components/search-bar/layout.module.css';
import { FaArrowTurnDown } from 'react-icons/fa6';
import { useState, useEffect } from 'react';
import { useContactContext } from '@/context.tsx/ContactContext';
import { parseDate } from '@/utils/parseDate';

export function SearchBar() {
  const [selectedButton, setSelectedButton] = useState('Everything');
  const { setGetRoute } = useContactContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleButtonClick = (buttonName: any) => {
    setSelectedButton(buttonName);
    handleSearch('');
  };

  const handleSearch = (value: any) => {
    if (!value){
        return setGetRoute({ route: 'list', queryParams: {} });
      }
    if (selectedButton === 'Everything') {
        return setGetRoute({ route: 'search', queryParams: { searchString: value } });
    } 
    if (selectedButton === 'createdAt') {
        const date = parseDate(value)
        
        return setGetRoute({ route: 'findByDate', queryParams: { findByDate: date.toISOString() } });
    }

    setGetRoute({ route: 'find', queryParams: { field: selectedButton, value } });

    
  };

  useEffect(() => {
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    const timeoutId = setTimeout(() => {
      handleSearch(searchTerm);
    }, 1000);

    setTypingTimeout(timeoutId);
  }, [searchTerm]);

  const buttons = [
    { key: 'Name', text: 'Nome' },
    { key: 'createdAt', text: 'Data de cadastro' },
    { key: 'Email', text: 'E-mail' },
    { key: 'LegalField', text: 'Especialização' },
    { key: 'Everything', text: 'Tudo' },
  ];

  return (
    <div className={style.container}>
      <div>
        <div className={style.optionsBar}>
          {buttons.map((button) => (
            <button
              key={button.key}
              className={selectedButton === button.key ? style.selected : ''}
              onClick={() => handleButtonClick(button.key)}
            >
              {button.text}
            </button>
          ))}
        </div>
      </div>
      <section>
        <FaArrowTurnDown />
        <input
  type={'text'}
  placeholder={selectedButton === 'createdAt' ? 'DD/MM/AAAA' : 'Procure pelo que quiser...'}
  value={searchTerm}
  onChange={(e) => {
      setSearchTerm(e.target.value);
  }}
  
/>

      </section>
    </div>
  );
}
