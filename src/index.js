import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import To_do_list from './To_do_list';
import App from './App';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
  <Routes>
   <Route  path = '/' element ={<App/>}/>
   <Route path ='/To_do_list' element={<To_do_list/>} />
   </Routes> 
    </BrowserRouter>
);

