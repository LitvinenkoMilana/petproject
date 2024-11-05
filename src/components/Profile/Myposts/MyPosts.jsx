import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

  let postsElements = props.posts
    .map(p => <Post message={p.message} likesCount={p.likesCount} />)


  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return <div className={classes.postsBlock}>
    <h3>My posts</h3>
    <div>
      <div>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
      </div>
      <div>
        <button onClick={addPost}>add post</button>
      </div>
    </div>

    <div className={classes.posts}>
      {postsElements}
    </div>
  </div>

}

export default MyPosts;