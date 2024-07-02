import styles from './Edit.module.css'

export default function Edit(){
    return(
        <section className={styles["edit-book"]}>
        <form className="edit">
            <h1>Edit Book</h1>

            <label htmlFor="cover">Cover:</label>
            <input type="url" id="cover" name="cover"/>

            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title"/>

            <label htmlFor="author">Author:</label>
            <input type="text" name="author" id="author"/>

            <label htmlFor="genre">Genre:</label>
            <input type="text" name="genre" id="genre"/>

            <label htmlFor="year">Year:</label>
            <input type="number" name="year" id="year"/>

            <label htmlFor="pages">Pages:</label>
            <input type="number" name="pages" id="pages"/>

            <label htmlFor="summary">Summary:</label>
            <textarea name="summary" id="summary"></textarea>

            <button className="edit-book-btn" type="submit">Edit book</button>
        </form>
    </section>
    )
}