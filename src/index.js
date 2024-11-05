import state, {subscribe} from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { addPost, updateNewPostText, addPracticePost } from './redux/state';


const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
    root.render(
        <App
            state={state}
            addPost={addPost}
            updateNewPostText={updateNewPostText}
            addPracticePost={addPracticePost}
        />
    );
};

rerenderEntireTree(state);

subscribe(rerenderEntireTree);



