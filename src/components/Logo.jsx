import { useEffect, useState } from 'react'

import MainPhoto from './../pictures/MAINPAGEWEB.jpg'
import MainPhotoPhone from './../pictures/MAINPAGEMOBILE.jpeg'
import MainLogo from './../pictures/LOGOS/NAVI-LOGO.png'
import DSSLogo from './../pictures/LOGOS/DSS.png'

const Logo = () => {

  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth)
    console.log(window.innerWidth)
  });


  return( 
    <div class="main-container">
      <div class="main-logo-container">
        <img class="main-logo img-fluid" src={DSSLogo} alt="DmitrukStrengthSystems" />
        <img class="main-logo img-fluid marginNavi" src={MainLogo} alt="NAVI" />
      </div>
      <img class="main-photo" src={width > 500 ? MainPhoto : MainPhotoPhone} alt="Lucas Dmitruk" />
    </div>

  
)
}

export default Logo