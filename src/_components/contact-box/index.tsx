import style from '@/_components/contact-box/layout.module.css'
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

import { Modal } from '../modal'
import { PageTitle } from '../page-title'
import { useState } from 'react';

export interface IContactData {
    name: string,
    tel: string,
    email: string,
    description: string,
    type: string,
    image: string,
    creationDate: Date
}
export function ContactBox(props: IContactData) {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const selectContact = () => {
        setIsModalVisible(true);
    };

    return (
        <>
            <Modal isVisible={isModalVisible} setIsVisible={setIsModalVisible}>
                <div className={style.contactDetails}>
                    <section>
                        <PageTitle>
                            <h1>Impacta Contatos</h1>
                            <h2>Detalhes do contato</h2>
                        </PageTitle>
                    </section>
                    <main>
                        <section>
                            <img src={props.image} alt={props.name} />
                            <h2>{props.email}</h2>
                            <h2>{props.tel}</h2>
                        </section>
                        <section>
                            <h1>{props.name}</h1>
                            <p>{props.description}</p>
                        </section>
                        <footer>
                            <button>
                                <FaEdit />
                            </button>
                            <button>
                                <MdDeleteForever />
                            </button>
                        </footer>
                    </main>
                </div>
            </Modal>

            <div className={style.container} key={props.tel} onClick={selectContact}>
                <img src={props.image} />
                <div className={style.text}>
                        <h1>{props.name}</h1>
                        <h2>{props.type}</h2>
                </div>
            </div>
        </>
    )
}