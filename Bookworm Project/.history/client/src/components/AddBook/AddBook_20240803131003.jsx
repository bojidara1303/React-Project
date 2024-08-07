import { useNavigate } from 'react-router-dom';
import * as bookService from '../../services/bookService';
import styles from './AddBook.module.css';
// import { useForm } from '../../hooks/useForm';
import { useState } from 'react';



export default function AddBook() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        cover: "",
        title: "",
        author: "",
        genre: "",
        year: "",
        pages: "",
        publisher: "",
        summary: ""
    })

    // const addBookSubmitHandler = async (e) => {
    //     e.preventDefault();

    //     const bookData = Object.fromEntries(new FormData(e.currentTarget));
    //     try {
    //         await bookService.createBook(bookData);
    //         navigate('/books')
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }

    const addBookSubmitHandler = async (e) => {
        e.preventDefault()

        const values = Object.fromEntries(new FormData(e.currentTarget));
        try {
            await bookService.createBook(values);
            navigate('/books')
        } catch (err) {
            console.log(err);
        }
    }

    // const { values, onChange, onSubmit } = useForm(addBookSubmitHandler, {
    //     cover: "",
    //     title: "",
    //     author: "",
    //     genre: "",
    //     year: "",
    //     pages: "",
    //     publisher: "",
    //     summary: ""
    // });

    const onChange = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <div className={styles["add-book-container"]}>
            <section className={styles["add-book"]}>
                <form className={styles["add"]} onSubmit={addBookSubmitHandler}>

                    <h1>Add Book</h1>

                    <label htmlFor="cover">Cover:</label>
                    <input
                        type="url"
                        id="cover"
                        name="cover"
                        value={values["cover"]}
                        onChange={onChange}
                        placeholder="Enter book cover URL"
                    />

                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={values["title"]}
                        onChange={onChange}
                        placeholder="Enter book title"
                    />

                    <label htmlFor="author">Author:</label>
                    <input
                        type="text"
                        name="author"
                        id="author"
                        value={values["author"]}
                        onChange={onChange}
                        placeholder="Enter book author"
                    />

                    <label htmlFor="genre">Genre:</label>
                    <input
                        type="text"
                        name="genre"
                        id="genre"
                        value={values["genre"]}
                        onChange={onChange}
                        placeholder="Enter book genre"
                    />

                    <label htmlFor="year">Year:</label>
                    <input
                        type="number"
                        name="year"
                        id="year"
                        value={values["year"]}
                        onChange={onChange}
                        placeholder="Enter year of publishing"
                    />

                    <label htmlFor="pages">Pages:</label>
                    <input
                        type="number"
                        name="pages"
                        id="pages"
                        value={values["pages"]}
                        onChange={onChange}
                        placeholder="Enter number of pages"
                    />

                    <label htmlFor="publisher">Publisher:</label>
                    <input
                        type="text"
                        name="publisher"
                        id="publisher"
                        value={values["publisher"]}
                        onChange={onChange}
                        placeholder="Enter book publisher"
                    />

                    <label htmlFor="summary">Summary:</label>
                    <textarea
                        name="summary"
                        id="summary"
                        value={values["summary"]}
                        onChange={onChange}
                        placeholder="Enter book summary"
                    />

                    <button className={styles["add-book-btn"]} type="submit">Add book</button>
                </form>
            </section>
        </div>
    )
}