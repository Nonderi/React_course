import styles from "./Post.module.css";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


function Post({author, body}) {
  return (
    <div className={styles.post}>
        <p className={styles.author}>{author}</p>
        <p>{body}</p>
    </div>
  );
}

export default Post;
