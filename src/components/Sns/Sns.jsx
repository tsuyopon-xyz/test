import React from 'react';
import './Sns.css';

function Sns() {
  return (
    <div className="sns">
      <ul>
        <li>
          <a href="https://twitter.com/syuupiyon95" className="twitter">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/profile.php?id=100008620690528"
            className="facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a href="mailto:komosyu4649@gmail.com" className="mail">
            <i className="fas fa-envelope"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sns;
