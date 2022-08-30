import {Routes,Route,} from "react-router-dom";
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import NewTask from './components/NewTask/NewTask';
import FinishedTasks from './components/FinishedTasks/FinishedTasks';
import PendingTasks from './components/PendingTasks/PendingTasks';

const AppRoutes= ()=>(
  <Routes>
    <Route path='/' element = {<NewTask/>}/>
    <Route path='/finished' element = {<FinishedTasks/>}/>
    <Route path='/pending' element ={<PendingTasks/>}/>
  </Routes>
)



function App() {

  return (
    <div>
        <Navbar/>
        <AppRoutes/>
    </div>
  );
}

export default App;
