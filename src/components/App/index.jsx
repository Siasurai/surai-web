import React from 'react';
import { Home } from '../Home';
import { Layout } from '../Layout';
import { Projects } from '../Projects';
import { About } from '../About';
import { Route, Routes } from 'react-router-dom';
import '../../assets/style.less';


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/about" element={<About/>}/>
      </Route>
    </Routes>
  );
};
