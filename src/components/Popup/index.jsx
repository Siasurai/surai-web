import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.less';
import PopupTitle from './img/porfolio-popup.svg';

export const Popup = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const imgElement = document.getElementById('popupImage');
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (imgElement) {
        if (scrollTop > prevScrollPos) {
          if (scrollTop > 300) {
            imgElement.style.transform = 'translateX(-13%)';
          }
        } else {
          imgElement.style.transform = 'translateX(-36%)';
        }

        setPrevScrollPos(scrollTop);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);


  return (
    <div className="project-popup-row p-top-40">
      <div id="popupImage" style={{ transform: 'translateX(-36%)' }}>
        <Link to="/projects">
          <img src={PopupTitle} alt="project-popup" />
        </Link>
        <div className="circle"> </div>
        <div className="circle"> </div>
        <div className="circle"> </div>
      </div>
    </div>
  );
};
