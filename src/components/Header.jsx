import React from 'react';
import '../Styles/header.css';


const Header = () => {
  return (
    <header className="header_container">
      
      <div className="foto_container">
        <img src="src/assets/foto perfil.jpg" alt="Foto perfil André" />
      </div>

      <div className="info_container">
        <div className="profile_infos">
          <h1>André William</h1>
          <p>UX/UI Designer | Front-End</p>
        </div>

        <div className="social_icones">
          <img src="src\assets\behance CV logo.png" className="bh_logo" alt="Behance logo"
            onClick={() => window.location.href='https://www.behance.net/andrwcabral'} />
            
          <img src="src/assets/github cv logo.png" className="gh_logo" alt="Github logo"
            onClick={() => window.location.href='https://github.com/AndreWill99'} />

          <img src="src/assets/linkedin cv logo.png" className="ld_logo" alt="Linkedin"
            onClick={() => window.location.href='https://www.linkedin.com/in/andre-william-costa-33b873172/'} />

          <img src="src/assets/wpp cv logo.png" className="wpp_logo" alt="Whatsapp"
            onClick={() => window.location.href='https://wa.me/+554198452031'} />

          <img src="src/assets/email cv logo.png" className="email_logo" alt="email logo"
            onClick={() => window.location.href='mailto: andrewilliam2012@hotmail.com'}/>
        </div>
      </div>
    </header>
  );
};

export default Header;
