import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import PracticePage from './components/MyPage/PracticePage';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';

// import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { addPost } from './redux/state';

const App = (props) => {
  console.log(props)

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route exact path="/dialogs" element={<Dialogs state={props.state.dialogsPage} />} />
            <Route path="/profile" element={<Profile profilePage={props.state.profilePage}
              addPost={props.addPost}
              updateNewPostText={props.updateNewPostText} />} />

            <Route path="/news" element={<News />} />
            <Route path="/practicepage" element={<PracticePage practicePageData={props.state.practicePageData}
            addPracticePost={props.addPracticePost}/>} />

          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

