"use client";

import React, { useState } from 'react';
import style from '@/_components/cotacts-table/layout.module.css';
import { IContactData } from '../contact-box';
import { ContactBox } from '../contact-box';
import { Pagination } from '../pagination';


export function ContactsTable() {
    const [actualPage, setActualPage] = useState(1);
    const contacts: IContactData[] = [{
        name: 'Lucas Tavares',
        tel: '(21) 965256564',
        email: 'l.tavaresc@hotmail.com',
        type: 'Advogado Criminal',
        description: 'Advogado com 20 anos de experiência',
        image: 'https://i.pinimg.com/736x/3e/aa/24/3eaa245d923949b6f662b8ba07b7a3b2.jpg',
        creationDate: new Date()
    }]

    const handlePageChange = (number: number) => {
        setActualPage(number);
    };

    return (
        <div className={style.container}>
            <Contacts contacts={contacts} />
            <section>
                <Pagination count={1} actualPage={actualPage} pageChange={handlePageChange} />
            </section>

        </div>
    );
}

function Contacts({ contacts }: { contacts: IContactData[] }) {
    return (
        <>
            {contacts.map((contact: IContactData, i) => (
                <div key={i}>
                    <ContactBox
                        name={contact.name}
                        tel={contact.tel}
                        email={contact.email}
                        type={contact.type}
                        description={contact.description}
                        image={contact.image}
                        creationDate={contact.creationDate}
                    />
                </div>
            ))}
        </>
    );
}
