"useClient"

import style from '@/_components/pagination/layout.module.css'

export function Pagination({ count, actualPage, pageChange } : { count: number, actualPage: number, pageChange: (page: number) => void }) {
    const paginationArr = createPaginationArray(count, 1)

    const handlePageClick = (page: number) => {
        pageChange(page);
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
    const select = 20;
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

    if(actualPage !== 1){
        pagesArray.push(totalPages.toString());
    }

    return pagesArray;
};
