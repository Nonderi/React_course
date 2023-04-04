import React from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import styles from "./PostList.module.css";
import Modal from "./Modal";
import { useState } from "react";

function PostList({ isVisible, onHideModal }) {
  // define [(initial) state, updated state] = useState(argument = default/initial state).
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    const copy = { ...postData, id: Math.random() }; // Copying the postData and creating an id.
    const nextPosts = [copy, ...posts]; // adding ned post to a copy of existing list of posts.
    console.log(nextPosts);
    setPosts(nextPosts);
  }

  return (
    <>
      {isVisible && (
        <Modal onClose={() => onHideModal}>
          <NewPost onCancel={onHideModal} onAddPost={addPostHandler} />
        </Modal>
      )}
      <ul className={styles.posts}>
        {posts.map((post) => (
          <Post author={post.author} body={post.body} />
        ))}
      </ul>
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "#044a4e" }}>
          <h2>There are no posts yet!</h2>
        </div>
      )}
    </>
  );
}

export default PostList;
