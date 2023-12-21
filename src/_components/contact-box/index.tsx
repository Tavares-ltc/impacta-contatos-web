import { PropsWithChildren } from 'react'
import style from '@/_components/contact-box/layout.module.css'

interface ContactData {
    name: string,
    tel: string,
    description: string,
    type: string,
    image: string,
    creationDate: Date
}
export function ContactBox(props : ContactData){
return (
    <div className={style.container}>
        <img src={props.image}/>
        <div className={style.text}>
        <h1>{props.name}</h1>
        <h2>{props.type}</h2>
        </div>
    </div>
)
}