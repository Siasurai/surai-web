import React from 'react';
import { SingleCard } from '../SingleCard';
import Aukce from './img/aukce.png';
import Granty from './img/nap.png';


export const Cards = () => {

  const blueColor = '#A0E1E1';
  const lightGreenColor = '#D9F6C6';
  const purple ='#ECC6F6'

  return (
    <>
    <div className="row p-top-40 projects-row">  
    <SingleCard 
        title="Aukce pro přírodu"
        subtitle="web pro charitativní večer Nadace Partnerství"
        bgColor={blueColor}
        img={Aukce}
        slug="https://www.aukceproprirodu.cz/"
      />

    <SingleCard 
        title="Granty"
        subtitle="webová stránka pro Nadace Partnerství"
        bgColor={lightGreenColor}
        img={Granty}
        slug="https://www.nadacepartnerstvi.cz/Granty#grant-list"
      />
      </div>


      {/* <div className="row p-top-40 projects-row">  
      <SingleCard 
        title="Aukce pro přírodu"
        subtitle="web pro charitativní večer Nadace Partnerství"
        bgColor={blueColor}
        img={Aukce}
        slug="https://www.aukceproprirodu.cz/"
      />

      <SingleCard 
        title="Aukce pro přírodu"
        subtitle="web pro charitativní večer Nadace Partnerství"
        bgColor={blueColor}
        img={Aukce}
        slug="https://www.aukceproprirodu.cz/"
      />
    </div> */}
    </>
  )
}