import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes } from 'react-router';
import Detail from './components/film/Detail';
import React from "react";
import TicketDetail from "./components/information_ticket/TicketDetail";

function App() {
  return (
      <Routes>
          <Route path='/detail/:id' element={<Detail />}/>
          <Route path='/ticket/detail/:id' element={<TicketDetail />}/>
      </Routes>
  );
}

export default App;
