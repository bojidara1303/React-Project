import CatalogBook from '../CatalogBook/CatalogBook'
import styles from './AllBooks.module.css'

export default function Catalog() {
    return (
        <section className={styles["book-catalog"]}>
            <h1 className={styles["book-catalog-heading"]}>Catalog</h1>

            <CatalogBook />
        </section>
    )
}