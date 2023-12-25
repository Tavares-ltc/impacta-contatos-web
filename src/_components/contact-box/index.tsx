import style from '@/_components/contact-box/layout.module.css'
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Modal } from '../modal'
import { PageTitle } from '../page-title'
import { useState } from 'react';
import { IContactData } from '@/interfaces/IContact';
import { useContactContext } from '@/context.tsx/ContactContext';

export function ContactBox(props: IContactData) {
    const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const [isDetailsModalVisible, setIsDetailsModalVisible] = useState(false);
    const { setSelectedContact, setGetRoute } = useContactContext();

    const selectContact = () => {
        setIsDetailsModalVisible(true);
    };

    const editButton = (contact : IContactData) => {
        setIsDetailsModalVisible(false);
        setSelectedContact(contact);
    }

    const deleteContact = (id: string) => {

        fetch(`${API_URL}/contact?contactId=${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao deletar contato');
                }

                setIsDetailsModalVisible(false);
                setGetRoute({route: 'list', queryParams: {}})
            })
            .catch(error => {
                console.error('Erro:', error);
            });
    }

    return (
        <>
            
            <Modal isVisible={isDetailsModalVisible} setIsVisible={setIsDetailsModalVisible}>
                <div className={style.contactDetails}>
                    <header>
                        <PageTitle>
                            <h1>Impacta Contatos</h1>
                            <h2>Detalhes do contato</h2>
                        </PageTitle>
                    </header>
                    <main>
                        <section>
                            <img src={props.image} alt={props.name} />
                            <h2>{props.email}</h2>
                            <h3>{props.phone}</h3>
                        </section>
                        <section>
                            <h1>{props.name}</h1>
                            <h2>{props.legalField}</h2>
                            <p>{props.description}</p>
                        </section>
                        <footer>
                            <button onClick={() => editButton(props)}>
                                <FaEdit />
                            </button>
                            <button onClick={() => deleteContact(props.id)}>
                                <MdDeleteForever />
                            </button>
                            <p>Usuário desde {new Date(props.createdAt).toLocaleDateString('pt-BR')}</p>
                        </footer>
                    </main>
                </div>
            </Modal>

            <div className={style.container} key={props.phone} onClick={selectContact}>
                <img src={props.image} />
                <div className={style.text}>
                    <h1>{props.name}</h1>
                    <h2>{props.legalField}</h2>
                </div>
            </div>
        </>
     
    )
}