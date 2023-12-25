import { PropsWithChildren, useContext, useState } from 'react';
import style from '@/_components/modal/layout.module.css';
import { useContactContext } from '@/context.tsx/ContactContext';

interface IModalProps {
    isVisible: boolean;
    setIsVisible: (visible: boolean) => void;
    onCloseFunction?: () => void
}

export function Modal({ isVisible, setIsVisible, onCloseFunction, children }: PropsWithChildren<IModalProps>) {
    const handleCloseModal = () => {
        setIsVisible(false);
        if(onCloseFunction){
            onCloseFunction();
        }
    };

    const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    if (isVisible) {
        return (
            <div className={style.container} onClick={handleCloseModal}>
                <div className={style.modal} onClick={handleModalClick}>
                    {children}
                </div>
            </div>
        );
    }

    return null;
}
