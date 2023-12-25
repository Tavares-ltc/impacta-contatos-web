"useClient"

import style from '@/_components/pagination/layout.module.css'
import { useContactContext } from '@/context.tsx/ContactContext';

export function Pagination() {
    const {actualPage, setActualPage, contacts} = useContactContext();
    const paginationArr = createPaginationArray(contacts.count, actualPage)
    
    

    const handlePageClick = (page: number) => {
        setActualPage(page);
    };

    const Buttons = paginationArr.map((page, index) => {
        return (
            <button
                onClick={() => handlePageClick(Number(page))}
                className={actualPage === Number(page) ? style.selected : ''}
                key={index}
            >
                {page}
            </button>
        );
    });

    return (
        <div className={style.container}>
            {Buttons}
        </div>
    );
}

const createPaginationArray = (count: number, actualPage: number): string[] => {
    const select = 15;
    const totalPages = Math.ceil(count / select);
    const pagesArray: string[] = [];
    pagesArray.push('1');

    for (let i = 3; i > 0; i--) {
        if (actualPage - i > 1) {
            pagesArray.push((actualPage - i).toString());
        }
    }
    if(actualPage !== 1){
        pagesArray.push(actualPage.toString());
    }

    for (let i = 1; i <= 3; i++) {
        if (actualPage + i < totalPages) {
            pagesArray.push((actualPage + i).toString());
        }
    }

    if(actualPage !== totalPages){
        pagesArray.push(totalPages.toString());
    }
    

    return pagesArray;
};
