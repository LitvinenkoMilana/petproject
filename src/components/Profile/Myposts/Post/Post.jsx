import React from "react";
import classes from './Post.module.css';

const Post = (props) => {
    
    return (
        <div className={classes.item}>
            <img src="https://ornella.club/uploads/posts/2023-08/thumbs/1691509863_ornella-club-p-vest-uait-terer-zhivotnie-pinterest-55.jpg" />
            <p>
                {props.message}
            </p>
           
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>

    )
}

export default Post;