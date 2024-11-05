import React from "react";
import classes from './Practicepage.module.css';
import PostPractice from "./PostPractice";

const PracticePage = (props) => {

  let postsPracticeElements = props.practicePageData.practice
    .map(p => <PostPractice text={p.text} likesCount={p.likesCount} />)

  let newPostPracticeElement = React.createRef();

  let addPracticePost = () => {
    let text = newPostPracticeElement.current.value;
    props.addPracticePost(text);
  }

  return (
    <div className={classes.pageBlock}>
      <h3>Practice Page</h3>
      <div className={classes.items}>
        {postsPracticeElements}
      </div>
      <div>
        <div>
          <textarea ref={newPostPracticeElement}></textarea>
        </div>
        <div>
          <button onClick={addPracticePost}>add post</button>
        </div>
      </div>
    </div>
  )
}

export default PracticePage;

