import React from 'react';
import './About.css';
import aboutSrc from '../../img/port-3.jpg'

function About() {
    return(
      <div className="about">
         <h2>About</h2> 

        <div className="about-wrapper">

         <img className="about-img" src={aboutSrc} alt="aboutSrc" />

          <div className="about-text">
           <div className="about-name">
            <h3>小森&nbsp;脩平</h3>
            <p className="Web">Web Creator</p>
           </div>

        　<div className="born">
            <p>
              千葉出身/静岡在住 <br/>
              1996年生まれ/24歳
            </p>
         </div>
        
         <div className="career">
            <p>
              都内4年制大学卒業 <br/>
              ↓ <br/>
              都内百貨店勤務 <br/>
              ↓ <br/>
              静岡のベンチャー企業に勤務 <br/>
              ＆ <br/>
              Web制作者
            </p>
        </div>


        </div>

       </div>

      </div>
    );
}

export default About;