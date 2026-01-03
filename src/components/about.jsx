import React from 'react';

function Sobre() {
  return (
    <section id="sobre">
      <h2>Sobre Mim</h2>
      <div className="sobre-container">
        <div className="sobre-texto">
          <p>Olá, meu nome é André William e sou um estudante de Sistemas de Informação na UVV.  Sou apaixonado por tecnologia e desenvolvimento web, buscando constantemente aprimorar minhas habilidades e conhecimento.</p>
          <p>Tenho experiência em desenvolvimento frontend, com foco em HTML, CSS e JavaScript.  Estou sempre em busca de novos desafios e oportunidades para contribuir com projetos inovadores e desafiadores.</p>
            {/* Adicione mais habilidades aqui */}
        </div>
        <div className="sobre-idiomas">
          <h3>Idiomas</h3>
          <ul>
            <li>Português (Nativo)</li>
            <li>Inglês (Intermediário)</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Sobre;
