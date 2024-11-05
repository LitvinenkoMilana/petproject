
let rerenderEntireTree = () => {
    console.log('state changed');
    
}

let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi, how are you?', likesCount: 12 },
            { id: 2, message: 'It is my first post', likesCount: 11 },
            { id: 3, message: 'It is my ffff post', likesCount: 1 }
        ],
        newPostText: 'pigIt'
    },
    dialogsPage: {
        messages: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'How are you?' },
            { id: 3, message: 'Pig' },
            { id: 4, message: 'Pig' },
            { id: 5, message: 'Pig' },
        ],
        dialogs: [
            { id: 1, name: 'Bob' },
            { id: 2, name: 'Victor' },
            { id: 3, name: 'Victoria' },
            { id: 4, name: 'Sveta' },
            { id: 5, name: 'Damon' },
            { id: 6, name: 'Cinnabon' },
        ],
    },
    practicePageData: {
        practice: [
            {id: 1, text: 'first post', likesCount: 5 },
            {id: 2, text: 'second post', likesCount: 10 },
            {id: 3, text: 'third post', likesCount: 13 },

        ]
    }
}

window.state = state;

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const addPracticePost = (postText) => {
    let newPracticePost = {
        id: 2,
        text: postText,
        likesCount: 0
    };
    state.practicePageData.practice.push(newPracticePost);
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;
