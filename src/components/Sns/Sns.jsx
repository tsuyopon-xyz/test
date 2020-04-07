import React from 'react';
import './Sns.css';


function Sns() {
 return (
  <div className="sns">
   <ul>
   <li>
   <a href="https://twitter.com/syuupiyon95" class="twitter">
    <i class="fab fa-twitter"></i>
   </a>
   </li>
   <li>
   <a href="https://www.facebook.com/profile.php?id=100008620690528" class="facebook">
    <i class="fab fa-facebook-f"></i>
   </a>
   </li>
   <li>
   <a href="mailto:komosyu4649@gmail.com" class="mail">
    <i class="fas fa-envelope"></i>
   </a>
   </li>
   </ul>
  </div>
 );
}


export default Sns