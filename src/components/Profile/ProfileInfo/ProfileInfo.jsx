import React from "react";
import classes from "./ProfileInfo.module.css";


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://img.freepik.com/free-photo/view-of-3d-adorable-cat-with-fluffy-clouds_23-2151113419.jpg'></img>
            </div>
            <div className={classes.descriptionBlock}>
                ava + description
            </div>

        </div>
    )
}

export default ProfileInfo;