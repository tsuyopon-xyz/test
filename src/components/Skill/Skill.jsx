import React from 'react';
import './Skill.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';


function Skill() {
    return (
      <div className="service">
        <h2>Skill</h2>
        
        <p className="skill-set">
          綺麗で見やすいデザインのWebサイトを作成するのはもちろん、
          お客様にとって価値のあるものとなるような制作を心がけております。
        </p>

        <div className="service-wrapper">

          <div className="service-item">
            <div className="logo">
             <i className="fas fa-laptop-code fa-3x"></i>
            </div>
            <div className="service-text">
              <h3>ホームページ制作</h3>
              <p>
                １ページの簡単なLP
                の制作から <br className="pc-none"/>
                レスポンシブデザインに対応した <br className="pc-none"/>
                本格的なホームページの作成ができます。
              </p>
            </div>
          </div>

          <div className="service-item">
            <div className="logo">
             <i className="fab fa-wordpress fa-3x"></i>
            </div>
            <div className="service-text">
              <h3>WordPress</h3>
              <p>
                Wordpressでのサイト制作で集客・売り上げ・操作性を意識した
                価値の高いサイト制作を心がけています。
              </p>
            </div>
          </div>

          <div className="service-item">
            <div className="logo">
             <i className="fab fa-react fa-3x"></i>
            </div>
            <div className="service-text">
              <h3>React</h3>
              <p>
                JavaScriptのライブラリであるReact.jsを使用し、
                UXに優れたSPAサイトでのサイト制作にも取り組んでおります。
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Skill;