import React from 'react';
import Arrow from './img/ar.svg';
import { Link } from 'react-router-dom';
import './style.less';

export const SingleCard = ({title, subtitle, img, bgColor, slug}) => {
  return (
    <Link to={slug} className="col-md-6 card--container"  target="_blank">
      <div className="card" style={{backgroundColor: bgColor}}>
      <div className="card--header">
        <div className="card--header--info">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        <Link id="arowLink" to={slug}>
        <img src={Arrow} alt="arrowIcon"/>
      </Link>
      </div>
      <div className="img-container">
       <img src={img} alt="title" />
      </div>
      </div>
    </Link>
  )
}