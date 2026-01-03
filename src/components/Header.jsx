import React from 'react';
import '../Styles/header.css';


const Header = () => {
  return (
    <header class="header_container">
      
      <div class="foto_container">
        <img src="src/assets/foto perfil.jpg" alt="Foto perfil André" />
      </div>

      <div class="info_container">
        <div class="profile_infos">
          <h1>André William</h1>
          <p>UX/UI Designer | Front-End</p>
        </div>

        <div class="social_icones">
          <img src="src\assets\behance CV logo.png" class="bh_logo" alt="Behance logo"
            onclick="location.href='https://www.behance.net/andrwcabral'" />
            
          <img src="src/assets/github cv logo.png" class="gh_logo" alt="Github logo"
            onclick="location.href='https://github.com/AndreWill99'" />

          <img src="src/assets/linkedin cv logo.png" class="ld_logo" alt="Linkedin"
            onclick="location.href='https://www.linkedin.com/in/andre-william-costa-33b873172/'" />

          <img src="src/assets/wpp cv logo.png" class="wpp_logo" alt="Whatsapp"
            onclick="location.href='https://wa.me/+554198452031'" />

          <img src="src/assets/email cv logo.png" class="email_logo" alt="email logo"
            onclick="location.href='mailto: andrewilliam2012@hotmail.com'"/>
        </div>
      </div>
    </header>
  );
};

export default Header;
