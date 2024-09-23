import React from 'react';
import './App.css';
import Header from './components/Header/Header';


const App = () => {
  return (
    <div className='app-wraper'>
      <header className='header'>
        <img src='https://img.freepik.com/premium-photo/white-blue-gradient-abstract-background-rendering-for-display-or-montage-your-products_626958-417.jpg?size=626&ext=jpg'></img>
      </header>
      <nav className='nav'>
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>
      <div className='content'>
        Main content
        <img src='https://img.freepik.com/free-photo/view-of-3d-adorable-cat-with-fluffy-clouds_23-2151113419.jpg'></img>
      </div>
      {/* <Header />
      <Footer /> */}
    </div>
  );
}



export default App;

