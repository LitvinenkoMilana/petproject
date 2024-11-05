import React from 'react';
import classes from './PostPractice.module.css';


const PostPractice = (props) => {
  return (
    <div className={classes.item}>
          <img src="https://i.ebayimg.com/00/s/MTIwMFgxMjAw/z/-WwAAOSwCzZlO7Sc/$_1.JPG" />
      <p>{props.text}</p>
      <span>like</span> {props.likesCount}
    </div>
  );
}

export default PostPractice;

