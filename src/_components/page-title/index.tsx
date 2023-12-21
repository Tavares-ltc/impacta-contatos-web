import { PropsWithChildren } from 'react'
import style from '@/_components/page-title/layout.module.css'
interface PageTitle {
    title: string,
    description: string
}
export async function PageTitle({children} : PropsWithChildren){
return (
    <div className={style.container}>
        {children}
    </div>
)
}