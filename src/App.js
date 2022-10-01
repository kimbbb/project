import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Main from "./page/main/Main.js";
import Login from "./page/user/Login.js";
import Sign from "./page/user/Sign.js";
import About from "./page/about/About.js";
import Writing from "./page/writing/Writing.js";
import Diary from "./page/diary/Diary.js";
import Detail from "./page/diary/Detail.js";


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Sign/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/writing' element={<Writing/>}/>
        <Route path='/diary' element={<Diary/>}/>
        <Route path='/modal' element={<Detail/>}/>
      </Routes>
    </div>
  );
}

export default App;
