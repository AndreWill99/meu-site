import React from 'react';
import {styled, Typography} from "@mui/material";

const About: React.FC = () => {
  return (
    <section className="about" >
      <Typography color="primary.contrastText" variant="h1" textAlign="center">Sobre Mim </Typography>
      <Typography color="primary.contrastText" variant="h3" textAlign="center" margin={2} marginRight={6} marginLeft={6}>
        Olá! Meu nome é André William, sou desenvolvedor Front-End com paixão por criar
        interfaces intuitivas e experiências de usuário envolventes. Tenho experiência
        em HTML, CSS, JavaScript, TypeScript, e frameworks modernos como React. Meu
        objetivo é sempre criar produtos que aliem design e funcionalidade.
      </Typography>
      <Typography color="primary.contrastText" variant="h3" textAlign="center" marginRight={6} marginLeft={6}>
        Além de codificar, gosto de explorar novas tecnologias, resolver problemas
        complexos e colaborar em projetos inovadores. Vamos construir algo incrível
        juntos!
      </Typography>
    </section>
  );
};

export default About;