import styles from "./NewPost.module.css";
import { useState } from "react";
import React from "react";

function NewPost({ onCancel, onAddPost }) {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      body: enteredBody,
      author: enteredAuthor,
    };
    console.log(postData);
    onCancel();
    onAddPost(postData);
  }
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <label htmlFor="body">Text</label>
      <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
      <label htmlFor="name">Your name</label>
      <input type="text" id="name" required onChange={authorChangeHandler} />
      <div className={styles.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </div>
    </form>
  );
}

export default NewPost;
