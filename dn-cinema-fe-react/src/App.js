import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes } from 'react-router';
import Detail from './components/film/Detail';
import React from "react";

function App() {
  return (
      <Routes>
        <Route path='/detail/:id' element={<Detail />}/>
      </Routes>
  );
}

export default App;
