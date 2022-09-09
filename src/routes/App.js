// Name: Sofia Nunes 
// Date: 04-07-2022
// Motive: definition of the routing system

import React from 'react';
import { Route, Routes } from 'react-router-dom';
// pages
import Layout from './Layout';
import HomePage from '../ecosystem/pages/home/HomePage';
import Missing from '../ecosystem/pages/missing/Missing';

function App() {

  return (      
    <div>
        <Routes>
          {/* Main route with every route nested inside it */}
          <Route path='/' element={<Layout/>}>

            {/* Public routes */}
            <Route path='/' element={<HomePage/>}/>

            {/* Catch all */}
            <Route path='*' element={<Missing/>}/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;