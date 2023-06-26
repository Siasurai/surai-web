import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.less';
import PopupTitle from './img/porfolio-popup.svg';
import Icon1 from './img/dr.png';
import Icon2 from './img/adaw.png';

export const Popup = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);


      const handleScroll = () => {
      const imgElement = document.getElementById('popupImage');
      const circleElements = document.getElementsByClassName('circle');
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (imgElement) {
        if (scrollTop > prevScrollPos) {
          if (scrollTop > 400) {
            imgElement.style.transform = 'translateX(-13%)';
            rotateCircles(circleElements, true);
          }
        } else {
          imgElement.style.transform = 'translateX(-56%)';
          rotateCircles(circleElements, false);
        }

        setPrevScrollPos(scrollTop);
      }
    };

  const rotateCircles = (elements, shouldRotate) => {
    Array.from(elements).forEach((element) => {
      element.style.transform = shouldRotate ? 'rotate(55deg)' : 'none';
    });
  };


  return (
    <div className="project-popup-row p-top-40">
      <div id="popupImage" style={{ transform: 'translateX(-56%)' }}>
        <Link to="/projects">
          <img src={PopupTitle} alt="project-popup" />
        </Link>
        <Link to="/projects" className="circle">
          <img src={Icon1} alt="Project" />
        </Link>
        <Link  to="/projects" className="circle">
          <img src={Icon2} alt="Project" />
        </Link>
      </div>
    </div>
  );
};
