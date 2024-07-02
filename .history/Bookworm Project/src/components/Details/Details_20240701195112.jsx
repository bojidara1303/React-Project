import styles from './Details.module.css'

export default function Details() {
    return (
        <section className={styles = ["book-details"]}>
            <img src="./public/images/Green Mile.jpg" alt="Green Mile" />
            <p className="book-title"><span>Title:</span> The Green Mile</p>
            <p className="book-author"><span>Author:</span> Stephen King</p>
            <p className="book-genre"><span>Genre:</span> Thriller</p>
            <p className="book-year"><span>Year:</span> 2015 </p>
            <p className="book-pages"><span>Pages:</span> 356</p>
            <p className="book-publisher"><span>Publisher:</span> Gollancz</p>
            <p className="book-summary"><span>Summary:</span> It tells the story of death row supervisor Paul Edgecombe's
                encounter with John
                Coffey, an unusual inmate who displays inexplicable healing and empathetic abilities. The serial novel was
                originally released in six volumes before being republished as a single-volume work. The book is an example
                of magical realism.</p>
            <div className={styles=["btn-container"]}>
                <button className="edit-book btn">Edit book</button>
                <button className="del-book btn">Delete book</button>
            </div>
        </section>
    )
}