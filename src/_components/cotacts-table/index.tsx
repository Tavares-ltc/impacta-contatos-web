import style from '@/_components/cotacts-table/layout.module.css'
import { ContactBox } from '../contact-box'

export async function ContactsTable() {
    
    return (
        <div className={style.container}>
            {getContacts()}
        </div>
    )
}

function getContacts(){
    const contacts = []
    for (let i = 0; i < 15; i++){
        contacts.push(<ContactBox/>) 
    }
    return contacts
}