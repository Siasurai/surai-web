import React from 'react';
import './style.less';
import Avatar from './img/Subtract.png';
// import Avatar from './img/avatar.jpg';
import LinkedIn from './img/linkedin.svg';
import { MainButton, SocialBtn } from '../Buttons/index';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
   <div className="row header-row p-top-40">
    <div className="col-md-7 card">
      <h1 className="m-bottom-32">Ahoj, jsem Nasťa, <br/>Frontend Developer</h1>
      <p>Moc mi záleží na tom, abych pomocí kódu přinášela pozitivní dopad. Ráda vytvářím uživatelsky zaměřené, příjemné a lidské zážitky, které pomáhají podnikům dosahovat svých cílů.</p>
      <div className="bg-container">
        <div className="bg" id="bg-1"></div>
        <div className="bg" id="bg-2"></div>
        <div className="bg" id="bg-3"></div>
      </div>
      <div className="m-top-64">
        <MainButton src="/" innerText="Contact"/>
        <SocialBtn src="https://www.linkedin.com/in/anastasiia-surai/" icon={LinkedIn} alt="LinkedIn"/>
      </div>
    </div>
    <Link className="col-md-5" to="/about">
      <div className="img-container">
      <img src={Avatar} alt="avatar for web" />
      </div>
    </Link>
    <div id="logo-bg"></div>
   </div>
  )
}