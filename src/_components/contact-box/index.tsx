import { PropsWithChildren } from 'react'
import style from '@/_components/contact-box/layout.module.css'
interface PageTitle {
    title: string,
    description: string
}
export function ContactBox(){
return (
    <div className={style.container}>
        <img src='https://i.pinimg.com/736x/3e/aa/24/3eaa245d923949b6f662b8ba07b7a3b2.jpg'/>
        <div className={style.text}>
        <h1>Lucas</h1>
        <h2>Advogado Penal</h2>
        </div>
    </div>
)
}