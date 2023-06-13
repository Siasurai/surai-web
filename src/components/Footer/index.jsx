import React from 'react';
import { MainButton, SocialBtn } from '../Buttons/index';
import LinkedIn from './img/linkedin.svg';
import './style.less';



export const Footer = () => (
  <div className="row footer-row  p-top-40">
    <div className="col-md-12 card">
      <h1 className="m-bottom-32">Máte zájem o spolupráci?</h1>
      <p>Nebojte se mi napsat ohledně spolupráce nebo jen tak na přátelský pozdrav.</p>
      <div className="bg-container">
        <div className="bg" id="bg-1"></div>
        <div className="bg" id="bg-2"></div>
        <div className="bg" id="bg-3"></div>
      </div>
      <div className="m-top-64">
        <MainButton src="/" innerText="Contact" />
        <SocialBtn src="https://www.linkedin.com/in/anastasiia-surai/" icon={LinkedIn} alt="LinkedIn" />
      </div>
    </div>
  </div>
)