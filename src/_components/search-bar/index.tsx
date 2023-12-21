import style from '@/_components/search-bar/layout.module.css'

export async function SearchBar() {
    return (
        <div className={style.container}>
            <div>
                <div className={style.optionsBar}>
                    <button>Nome</button>
                    <button>Data de cadastro</button>
                    <button>E-mail</button>
                    <button>Especialização</button>
                    <button>Tudo</button>
                </div>
            </div>

            <input type='text' name='search' placeholder='Procure pelo que quiser...' />
        </div>
    )
}