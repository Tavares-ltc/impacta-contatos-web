"use client";

import React, { useEffect, useState } from 'react';
import style from '@/_components/cotacts-table/layout.module.css';
import { ContactBox } from '../contact-box';
import { Pagination } from '../pagination';
import { useContactContext } from '@/context.tsx/ContactContext';
import { IContactData } from '@/interfaces/IContact';


export function ContactsTable() {

    const { contacts } = useContactContext();

    return (
        <>
        <div className={style.container}>
        {contacts.rows.map((contact: IContactData, i) => (
                <div key={i}>
                    <ContactBox
                        id={contact.id}
                        name={contact.name}
                        phone={contact.phone}
                        email={contact.email}
                        legalField={contact.legalField}
                        description={contact.description}
                        image={contact.image}
                        createdAt={contact.createdAt}
                    />
                </div>
            ))}            

        </div>
        <section>
                <Pagination/>
        </section>
        </>
    );
}
