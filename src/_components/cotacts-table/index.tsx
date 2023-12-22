"use client"

import { useState } from 'react';
import style from '@/_components/cotacts-table/layout.module.css';
import { ContactBox } from '../contact-box';
import { ReactNode } from 'react';
import { Pagination } from '../pagination';
import { Modal } from '../modal';

interface IContacts {
    page: number,
    handleClick: () => void
}

export function ContactsTable() {
    const [actualPage, setActualPage] = useState(1);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const handlePageChange = (number: number) => {
        setActualPage(number);
    };


    return (
        <div className={style.container}>
            <Contacts page={20} handleClick={()=> setIsModalVisible(true)} />
            <section>
                <Pagination count={80} actualPage={actualPage} pageChange={handlePageChange} />
            </section>
            <Modal isVisible={isModalVisible} setIsVisible={setIsModalVisible}>
                <h2>Detalhes do contato</h2>
            </Modal>
        </div>
    );
}

function Contacts({ page, handleClick }: IContacts): ReactNode[] {
    const contactsList = [];

    const itemsPerPage = 15;
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    for (let i = startIndex; i < endIndex; i++) {
        contactsList.push(
            <div key={i} onClick={() => handleClick()}>
                <ContactBox
                    name='Lucas'
                    tel='(21) 965256564'
                    type='Advogado Criminal'
                    description='Advogado com 20 anos de experiência'
                    image='https://i.pinimg.com/736x/3e/aa/24/3eaa245d923949b6f662b8ba07b7a3b2.jpg'
                    creationDate={new Date()}
                />
            </div>
        );
    }
    return contactsList;
}

