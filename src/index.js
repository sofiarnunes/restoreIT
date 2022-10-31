import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './style/main.css'

ReactDOM.render(

  <BrowserRouter>
    <Routes>
        <Route path='/*' element={<App/>}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

