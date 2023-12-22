'use client'

import style from '@/_components/creation-button/layout.module.css'
import { Modal } from '../modal'
import { useState } from 'react';

export function CreationButton() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <>
            <Modal isVisible={isModalVisible} setIsVisible={setIsModalVisible}>
                <h2>Criação de contato</h2>
            </Modal>
            <button className={style.creationButton} onClick={()=> setIsModalVisible(true)}>
                +
            </button>
        </>
    )
}