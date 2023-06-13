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
      <a href={src} download={download} className='btn btn-primary' target="_blank">{innerText}</a>
  )
}

export const SocialBtn = ({src, icon, alt}) => {
  return (
      <a href={src} className='btn-soc' target="_blank">
        <img src={icon} alt={alt} />
      </a>
  )
}