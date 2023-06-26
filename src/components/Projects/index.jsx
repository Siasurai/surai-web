import React from 'react';
import Aukce from '../Cards/img/aukce.png';
import Granty from '../Cards/img/nap.png';
import AdAw from '../Cards/img/adaw.png';
import { SingleCard } from '../SingleCard';

export const Projects = () => {

  const greyColor ='#F8F9F8';

  return (
    <>
        <div className="row p-top-40 projects-row">  
    <SingleCard 
        title="Aukce pro přírodu"
        subtitle="web pro charitativní večer Nadace Partnerství"
        bgColor={greyColor}
        img={Aukce}
        slug="/project"
      />

    <SingleCard 
        title="Granty"
        subtitle="webová stránka pro Nadace Partnerství"
        bgColor={greyColor}
        img={Granty}
        slug="/project"
      />
    </div>

    <div className="row p-top-30 projects-row">  
    <SingleCard 
        title="Adapterra Awards"
        subtitle="web pro projekt, které pomáhá přizpůsobit města klimatické změně."
        bgColor={greyColor}
        img={AdAw}
        slug="/project"
      />

    </div>
    </>
    
  )
}