import styles from './page.module.css'
import { PageTitle } from '@/_components/page-title'
import { SearchBar } from '@/_components/search-bar'
import { ContactsTable } from '@/_components/cotacts-table'
import { CreationButton } from '@/_components/creation-button'
import { ContactProvider } from '@/context.tsx/ContactContext'

export default function Home() {
  return (
    <main className={styles.main}>
      <PageTitle>
        <header className={styles.homeTitle}>
          <h1>Impacta Contatos</h1>
          <h2>Ache seu contato jurídico aqui!</h2>
        </header>
      </PageTitle>
    <ContactProvider>
      <SearchBar />
      <ContactsTable />
      <CreationButton />
    </ContactProvider>
    </main>
  )
}
