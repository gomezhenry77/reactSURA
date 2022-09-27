import React from 'react';
import ReactDOM from 'react-dom/client';

import{Banner} from './Banner/Banner.js'
import {Menu} from './Menu/Menu.js'
import {Henry} from './Componente/Henry.js'
import {Sinopsis} from './Sinopsis/Sinopsis.js'
import {Footer} from './Footer/Footer.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Menu/>
    <Banner/>
    <Sinopsis/>
    <Footer/>
   
  </React.StrictMode>
);
