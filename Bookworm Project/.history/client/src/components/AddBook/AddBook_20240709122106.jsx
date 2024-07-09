import styles from './AddBook.module.css';
import { createBook } from '../../services/bookService';
import { Navigate, useNavigate } from 'react-router-dom';

export default function AddBook() {
    const addBookSubmit = async (e) => {
        e.preventDefault();

        const bookData = Object.fromEntries(new FormData(e.currentTarget));
        navigate('/books')
    }

    return (
        <div className={styles["add-book-container"]}>
            <section className={styles["add-book"]}>
                <form className={styles["add"]} onSubmit={addBookSubmit}>

                    <h1>Add Book</h1>

                    <label htmlFor="cover">Cover:</label>
                    <input type="url" id="cover" name="cover" placeholder="Enter book cover URL" />

                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" name="title" placeholder="Enter book title" />

                    <label htmlFor="author">Author:</label>
                    <input type="text" name="author" id="author" placeholder="Enter book author" />

                    <label htmlFor="genre">Genre:</label>
                    <input type="text" name="genre" id="genre" placeholder="Enter book genre" />

                    <label htmlFor="year">Year:</label>
                    <input type="number" name="year" id="year" placeholder="Enter year of publishing" />

                    <label htmlFor="pages">Pages:</label>
                    <input type="number" name="pages" id="pages" placeholder="Enter number of pages" />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary" placeholder="Enter book summary"></textarea>

                    <button className={styles["add-book-btn"]} type="submit">Add book</button>
                </form>
            </section>
        </div>
    )
}