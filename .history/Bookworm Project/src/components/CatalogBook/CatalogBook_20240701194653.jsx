import styles from './CatalogBook.module.css'

export default function CatalogBook() {
    return (
        <div className="book-container">
            <article className="book">
                <img src="./public/images/Green Mile.jpg" />
                <h1>Green Mile</h1>
                <h3>Stephen King</h3>
                <button className="show-details">Show details</button>
            </article>
        </div>
    )
}