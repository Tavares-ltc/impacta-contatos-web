'use client'

import { PropsWithChildren } from 'react'
import style from '@/_components/page-title/layout.module.css'

export function PageTitle({children} : PropsWithChildren){
return (
    <div className={style.container}>
        {children}
    </div>
)
}