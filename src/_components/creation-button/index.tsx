'use client'

import style from '@/_components/creation-button/layout.module.css'
import { Modal } from '../modal'
import { useState } from 'react';
import { PageTitle } from '../page-title';


export function CreationButton() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <div className={style.container}>

            <Modal isVisible={isModalVisible} setIsVisible={setIsModalVisible}>
                <section>
                    <PageTitle>
                        <h1>Impacta Contatos</h1>
                        <h2>Criação de contatos</h2>
                    </PageTitle>
                </section>
                <form>
                    <label htmlFor='name'>Nome</label>
                    <input type='text' id='name' name='name'></input>

                    <label htmlFor='tel'>Número de telefone</label>
                    <input type='text' id='tel' name='tel'></input>

                    <label htmlFor='type'>Especialização profissional</label>
                    <input type='text' id='type' name='type'></input>

                    <label htmlFor='image'>URL de imagem</label>
                    <input type='text' id='name' name='name'></input>

                    <label htmlFor='description'>Descrição do contato</label>
                    <textarea id='description' name='description'></textarea>


                    <button>Criar contato</button>

                </form>
            </Modal>
            <button className={style.creationButton} onClick={() => setIsModalVisible(true)}>
                +
            </button>
        </div>
    )
}