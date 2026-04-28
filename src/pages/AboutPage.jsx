import React from 'react';
import GitImg from '../image/github.png'
import AboutImg from '../image/about-us.png'
const AboutPage = () => {
  return (
    <div className='about'>
      <div className="about-container">
        <div className="about-container-detail">
       <h3>About Mood Cocktails</h3>
        <p>
        Welcome to Mood Cocktails, where every sip tells a story. Born in the fiery 
        pits of a weekend coding bootcamp, three spirited adventurers (literally) 
        mixed their skills to create an app that matches your mood with the perfect cocktail.
      </p>
      </div>
      
     
      <div className="about-team">
      
      <h3>Meet the Creators</h3>

        <div className="team-member1">
        <h4><a href="https://github.com/filipamiralopes"><img src={GitImg} alt="GitHub Logo" className='git-logo'/></a> Filipa Lopes</h4>
        </div>

        <div className="team-member2">
        <h4> <a href="https://github.com/farnoushdf"><img src={GitImg} alt="GitHub Logo" className='git-logo'/></a> Farnoush Daliran</h4>
         </div>
        
        <div className="team-member3">
        <h4><a href="https://github.com/dalfang"><img src={GitImg} alt="GitHub Logo" className='git-logo'/></a>  Dalin Fangloy</h4>
          </div>
        
      </div>
     
    </div>
    {/* <div className='about-image'>
        <img src={AboutImg} alt="About Image" />
      </div> */}
    </div>
  );

};

export default AboutPage;
