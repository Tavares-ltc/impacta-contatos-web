import style from '@/_components/cotacts-table/layout.module.css'
import { ContactBox } from '../contact-box'
import { ReactNode } from 'react'

export async function ContactsTable() {

    return (
        <div className={style.container}>
            {getContacts()}
        </div>
    )
}

function getContacts(): ReactNode[] {
    const contacts = []
    for (let i = 0; i < 15; i++) {
        contacts.push(<ContactBox
            name='Lucas'
            tel='(21) 965256564'
            type='Advogado Criminal'
            description='Advogado com 20 anos de experiência'
            image='https://i.pinimg.com/736x/3e/aa/24/3eaa245d923949b6f662b8ba07b7a3b2.jpg'
            creationDate={ new Date() }
        />)
    }
    return contacts
}