import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Logo from './img/Logo.svg'
import './style.less';
import { Footer } from '../Footer';
import { DownloadBtn } from '../Buttons/index';
import CV from './static/SuraiCV.pdf';


export const Layout = () => {
  return (
    <div className="container">
      <nav className="menu p-top-40">
        <NavLink to="/"> <img src={Logo} alt="logo" /> </NavLink>
        <div className="menu--rigth">
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/about">About</NavLink>
        <DownloadBtn src={CV} innerText="CV" download="SuraiCV"/>
        </div>
      </nav>
      <Outlet />
      <Footer />
    </div>
  );
};