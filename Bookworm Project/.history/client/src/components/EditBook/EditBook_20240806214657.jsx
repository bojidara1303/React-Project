import styles from './EditBook.module.css';

import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getOneBook, editBook } from '../../services/bookService';
import useForm from '../../hooks/useForm';


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
    }, [bookId])

    const editBookSubmitHandler = async (values) => {
        try {
            await editBook(bookId, values);
            navigate('/books')
        } catch (err) {
            console.log(err);
        }
    }

    // const onChange = (e) => {
    //     setBook(state => ({
    //         ...state,
    //         [e.target.name]: e.target.value
    //     }));
    // }

    const { values, onChange, onSubmit } = useForm(editBookSubmitHandler, {
        cover: "",
        title: "",
        author: "",
        genre: "",
        year: "",
        pages: "",
        publisher: "",
        summary: ""
    });

    return (
        <div className={styles["edit-book-container"]}>
            <section className={styles["edit-book"]}>
                <form className={styles["edit"]} onSubmit={onSubmit}>
                    <h1>Edit Book</h1>

                    <label htmlFor="cover">Cover:</label>
                    <input type="url" name="cover" id="cover" value={book["cover"]} onChange={onChange} />

                    <label htmlFor="title">Title:</label>
                    <input type="text" name="title" id="title" value={book["title"]} onChange={onChange} />

                    <label htmlFor="author">Author:</label>
                    <input type="text" name="author" id="author" value={book["author"]} onChange={onChange} />

                    <label htmlFor="genre">Genre:</label>
                    <input type="text" name="genre" id="genre" value={book["genre"]} onChange={onChange} />

                    <label htmlFor="year">Year:</label>
                    <input type="number" name="year" id="year" value={book["year"]} onChange={onChange} />

                    <label htmlFor="pages">Pages:</label>
                    <input type="number" name="pages" id="pages" value={book["pages"]} onChange={onChange} />

                    <label htmlFor="publisher">Publisher:</label>
                    <input type="text" name="publisher" id="publisher" value={book["publisher"]} onChange={onChange} />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary" value={book["summary"]} onChange={onChange} ></textarea>

                    <button className={styles["edit-book-btn"]}>Edit book</button>
                </form>
            </section>
        </div>
    )
}