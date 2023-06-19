import React from 'react';
import {Link } from 'react-router-dom';
import './style.less';

export const MainButton = ({src, innerText}) => {
  return (
      <Link className='btn btn-primary' to={src}>{innerText}</Link>
  )
}

export const DownloadBtn = ({src, innerText, download}) => {
  return (
      <Link to={src} download={download} className='btn btn-primary' target="_blank">{innerText}</Link>
  )
}

export const SocialBtn = ({src, icon, alt}) => {
  return (
      <Link to={src} className='btn-soc' target="_blank">
        <img src={icon} alt={alt} />
      </Link>
  )
}

