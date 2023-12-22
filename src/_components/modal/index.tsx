import { PropsWithChildren, useState } from 'react';
import style from '@/_components/modal/layout.module.css';

interface IModalProps {
    isVisible: boolean;
    setIsVisible: (visible: boolean) => void;
}

export function Modal({ isVisible, setIsVisible, children }: PropsWithChildren<IModalProps>) {
    const handleCloseModal = () => {
        setIsVisible(false);
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
