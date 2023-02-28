import Post from "./Post";
import NewPost from "./NewPost";
import styles from "./PostList.module.css";
import Modal from "./Modal";
import { useState } from "react";

function PostList({ isVisible, onHideModal }) {
  // define [(initial) state, updated state] = useState(argument = the initial state).
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    setPosts((existingPosts) => [postData, ...existingPosts]);
    // making sure that the existing posts are added to the array. If you need to keep existing data
    // you should use the functional code that makes sure we use the latest state.
  }

  return (
    <>
      {isVisible ? (
        <Modal onClose={() => onHideModal}>
          <NewPost onCancel={onHideModal} onAddPost={addPostHandler} />
        </Modal>
      ) : (
        false
      )}
      {posts.length > 0 && (
         <ul className={styles.posts}>
         {posts.map((post) => (
           <Post key={Math.random()} author={post.author} body={post.body} />
         ))}
       </ul>
      )}
     {posts.length === 0 && (
      <div style={{textAlign: "center", color: "indigo"}}>
        <h2>There are no posts yet!</h2>
      </div>
     )}
    </>
  );
}

export default PostList;
