import styles from './AddBook.module.css';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { createBook } from '../../services/bookService';
import useForm from '../../hooks/useForm';

export default function AddBook() {
    const navigate = useNavigate();

    const addBookSubmitHandler = async (values) => {
        try {
            await createBook(values);
            navigate('/books')
        } catch (err) {
            alert(err);
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

    const [coverError, setCoverError] = useState('');
    const [titleError, setTitleError] = useState('');
    const [authorError, setAuthorError] = useState('');
    const [genreError, setGenreError] = useState('');
    const [yearError, setYearError] = useState('');
    const [pagesError, setPagesError] = useState('');
    const [publisherError, setPublisherError] = useState('');
    const [summaryError, setSummaryError] = useState('');

    const coverValidator = () => {
        if (values.cover === '') {
            setCoverError('Cover image URL is required!')
        } else {
            setCoverError('')
        }
    };

    const titleValidator = () => {
        if (values.title === '') {
            setTitleError('Title is required!')
        } else {
            setTitleError('')
        }
    };

    const authorValidator = () => {
        if (values.author === '') {
            setAuthorError('Author is required!')
        } else {
            setAuthorError('')
        }
    };

    const genreValidator = () => {
        if (values.genre === '') {
            setGenreError('Genre is required!')
        } else {
            setGenreError('')
        }
    };

    const yearValidator = () => {
        if (values.year === '') {
            setYearError('Year is required!')
        } else if (values.year < 1990 || values.year > 2024) {
            setYearError('Year must be between 1900 and 2024!')
        } else {
            setYearError('')
        }
    };

    const pagesValidator = () => {
        if (values.pages === '') {
            setPagesError('Pages is required!')
        } else if (values.pages < 0) {
            setPagesError('Pages must be a positive number!')
        } else {
            setPagesError('')
        }
    };

    const publisherValidator = () => {
        if (values.publisher === '') {
            setPublisherError('Publisher is required!')
        } else {
            setPublisherError('')
        }
    };

    const summaryValidator = () => {
        if (values.summary === '') {
            setSummaryError('Summary is required!')
        } else {
            setSummaryError('')
        }
    };

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
                        onBlur={coverValidator}
                        placeholder="Enter book cover URL"
                    />
                    {coverError && (
                        <p className={styles["cover-error"]}>{coverError}</p>
                    )}

                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={values["title"]}
                        onChange={onChangeHandler}
                        onBlur={titleValidator}
                        placeholder="Enter book title"
                    />
                    {titleError && (
                        <p className={styles["title-error"]}>{titleError}</p>
                    )}

                    <label htmlFor="author">Author:</label>
                    <input
                        type="text"
                        name="author"
                        id="author"
                        value={values["author"]}
                        onChange={onChangeHandler}
                        onBlur={authorValidator}
                        placeholder="Enter book author"
                    />
                    {authorError && (
                        <p className={styles["author-error"]}>{authorError}</p>
                    )}

                    <label htmlFor="genre">Genre:</label>
                    <input
                        type="text"
                        name="genre"
                        id="genre"
                        value={values["genre"]}
                        onChange={onChangeHandler}
                        onBlur={genreValidator}
                        placeholder="Enter book genre"
                    />
                    {genreError && (
                        <p className={styles["genre-error"]}>{genreError}</p>
                    )}

                    <label htmlFor="year">Year:</label>
                    <input
                        type="number"
                        name="year"
                        id="year"
                        value={values["year"]}
                        onChange={onChangeHandler}
                        onBlur={yearValidator}
                        placeholder="Enter year of publishing"
                    />
                    {yearError && (
                        <p className={styles["year-error"]}>{yearError}</p>
                    )}

                    <label htmlFor="pages">Pages:</label>
                    <input
                        type="number"
                        name="pages"
                        id="pages"
                        value={values["pages"]}
                        onChange={onChangeHandler}
                        onBlur={pagesValidator}
                        placeholder="Enter number of pages"
                    />
                    {pagesError && (
                        <p className={styles["pages-error"]}>{pagesError}</p>
                    )}

                    <label htmlFor="publisher">Publisher:</label>
                    <input
                        type="text"
                        name="publisher"
                        id="publisher"
                        value={values["publisher"]}
                        onChange={onChangeHandler}
                        onBlur={publisherValidator}
                        placeholder="Enter book publisher"
                    />
                    {publisherError && (
                        <p className={styles["publisher-error"]}>{publisherError}</p>
                    )}

                    <label htmlFor="summary">Summary:</label>
                    <textarea
                        name="summary"
                        id="summary"
                        value={values["summary"]}
                        onChange={onChangeHandler}
                        onBlur={summaryValidator}
                        placeholder="Enter book summary"
                    />
                    {summaryError && (
                        <p className={styles["summary-error"]}>{summaryError}</p>
                    )}

                    <button className={styles["add-book-btn"]}>Add book</button>
                </form>
            </section>
        </div>
    )
}