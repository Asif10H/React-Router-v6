import React from 'react';
import { Navigate, Routes, Route} from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Posts from './components/Posts/Posts';
import Post from './components/Post/Post';
import About from './components/About/About';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Navigate to="/home"/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/header" element={<Header />} />
        <Route path="/posts" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts/:id" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
