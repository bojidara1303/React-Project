import styles from './AddBook.module.css';

import { useNavigate } from 'react-router-dom';

import { createBook } from '../../services/bookService';
import useForm from '../../hooks/useForm';

export default function AddBook() {
    const navigate = useNavigate();

    const addBookSubmitHandler = async (values) => {
        try {
            await createBook(values);
            navigate('/books')
        } catch (err) {
            console.log(err);
        }
    };

    const { values, onChangeHandler, onSubmitHandler } = useForm(addBookSubmitHandler, {
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
        <div className={styles["add-book-container"]}>
            <section className={styles["add-book"]}>
                <form className={styles["add"]} onSubmit={onSubmitHandler}>

                    <h1>Add Book</h1>

                    <label htmlFor="cover">Cover:</label>
                    <input
                        type="url"
                        id="cover"
                        name="cover"
                        value={values["cover"]}
                        onChange={onChangeHandler}
                        placeholder="Enter book cover URL"
                    />

                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={values["title"]}
                        onChange={onChangeHandler}
                        placeholder="Enter book title"
                    />

                    <label htmlFor="author">Author:</label>
                    <input
                        type="text"
                        name="author"
                        id="author"
                        value={values["author"]}
                        onChange={onChangeHandler}
                        placeholder="Enter book author"
                    />

                    <label htmlFor="genre">Genre:</label>
                    <input
                        type="text"
                        name="genre"
                        id="genre"
                        value={values["genre"]}
                        onChange={onChangeHandler}
                        placeholder="Enter book genre"
                    />

                    <label htmlFor="year">Year:</label>
                    <input
                        type="number"
                        name="year"
                        id="year"
                        value={values["year"]}
                        onChange={onChangeHandler}
                        placeholder="Enter year of publishing"
                    />

                    <label htmlFor="pages">Pages:</label>
                    <input
                        type="number"
                        name="pages"
                        id="pages"
                        value={values["pages"]}
                        onChange={onChangeHandler}
                        placeholder="Enter number of pages"
                    />

                    <label htmlFor="publisher">Publisher:</label>
                    <input
                        type="text"
                        name="publisher"
                        id="publisher"
                        value={values["publisher"]}
                        onChange={onChangeHandler}
                        placeholder="Enter book publisher"
                    />

                    <label htmlFor="summary">Summary:</label>
                    <textarea
                        name="summary"
                        id="summary"
                        value={values["summary"]}
                        onChange={onChangeHandler}
                        placeholder="Enter book summary"
                    />

                    <button className={styles["add-book-btn"]}>Add book</button>
                </form>
            </section>
        </div>
    )
}