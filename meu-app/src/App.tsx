import { useState } from 'react';
import './App.css';
import FormsUpdate from './components/gv/FormsUpdate/FormsUpdate';
import FormsAdd from './components/gv/FormsAdd/FormsAdd';
import FormsGet from './components/gv/FormsGet/FormsGet';
import FormsDelete from './components/gv/FormsDelete/FormsDelete'; 
import Lista from './components/gv/Lista';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      
      <Router>
        <Routes>
          <Route path="/" element={<FormsAdd />} />  
          <Route path="/update" element={<FormsUpdate />} /> 
          <Route path="/get" element={<FormsGet />} />  
          <Route path="/delete" element={<FormsDelete />} /> 
          <Route path="/lista" element ={<Lista />}/>
        </Routes>
      </Router>

      
    </>
  );
}

export default App;
