import styles from './EditBook.module.css';

import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getOneBook, editBook } from '../../services/bookService';

export default function EditBook() {
    const navigate = useNavigate();
    const { bookId } = useParams();
    const [book, setBook] = useState({
        cover: "",
        title: "",
        author: "",
        genre: "",
        year: "",
        pages: "",
        publisher: "",
        summary: ""
    });

    useEffect(() => {
        getOneBook(bookId)
            .then(result => {
                setBook(result)
            })
            .catch(error =>{
                alert(error)
            })
    }, [bookId])

    const editBookSubmitHandler = async (e) => {
        e.preventDefault()

        const values = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await editBook(bookId, values);
            navigate('/books')
        } catch (error) {
            console.log(error);
        }
    }

    const onChangeHandler = (e) => {
        setBook(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    }

    return (
        <div className={styles["edit-book-container"]}>
            <section className={styles["edit-book"]}>
                <form className={styles["edit"]} onSubmit={editBookSubmitHandler}>
                    <h1>Edit Book</h1>

                    <label htmlFor="cover">Cover:</label>
                    <input type="url" name="cover" id="cover" value={book["cover"]} onChange={onChangeHandler} />

                    <label htmlFor="title">Title:</label>
                    <input type="text" name="title" id="title" value={book["title"]} onChange={onChangeHandler} />

                    <label htmlFor="author">Author:</label>
                    <input type="text" name="author" id="author" value={book["author"]} onChange={onChangeHandler} />

                    <label htmlFor="genre">Genre:</label>
                    <input type="text" name="genre" id="genre" value={book["genre"]} onChange={onChangeHandler} />

                    <label htmlFor="year">Year:</label>
                    <input type="number" name="year" id="year" value={book["year"]} onChange={onChangeHandler} />

                    <label htmlFor="pages">Pages:</label>
                    <input type="number" name="pages" id="pages" value={book["pages"]} onChange={onChangeHandler} />

                    <label htmlFor="publisher">Publisher:</label>
                    <input type="text" name="publisher" id="publisher" value={book["publisher"]} onChange={onChangeHandler} />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary" value={book["summary"]} onChange={onChangeHandler} />

                    <button className={styles["edit-book-btn"]}>Edit book</button>
                </form>
            </section>
        </div>
    )
}