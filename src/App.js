import React from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import NavBar from './components/navBar/NavBar';
import RowPost from './components/RowPost/RowPost';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost/>
    </div>
  );
}

export default App;
