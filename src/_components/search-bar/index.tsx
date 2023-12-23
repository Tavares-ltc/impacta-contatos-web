'use client'

import style from '@/_components/search-bar/layout.module.css'
import { FaArrowTurnDown } from "react-icons/fa6";
import { useState } from 'react'

export function SearchBar() {
    const [selectedButton, setSelectedButton] = useState('everything')

    const handleButtonClick = (buttonName: string) => {
        setSelectedButton(buttonName)
    }


    const buttons = [
        {key: 'name', text: 'Nome'},
        {key: 'createdAt', text: 'Data de cadastro'},
        {key: 'email', text: 'E-mail'},
        {key: 'expertise', text: 'Especialização'},
        {key: 'everything', text: 'Tudo'},
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
            <FaArrowTurnDown/>
            <input type='text' name='search' placeholder='Procure pelo que quiser...' />
            </section>
        </div>
    )
}