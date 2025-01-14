import React from 'react';
import MyPosts from './Myposts/MyPosts';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  
  return (
    <div className={classes}>
      <ProfileInfo />
      <MyPosts posts={props.profilePage.posts} addPost={props.addPost} newPostText={props.profilePage.newPostText} updateNewPostText={props.updateNewPostText}/>
    </div>
  )
}

export default Profile;