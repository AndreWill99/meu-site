import React from 'react';

function Experiencia() {
  return (
    <section id="experiencia">
      <h2>Experiência</h2>
      <div className="experiencia-container">
      <p class="texperiencia1">Experiencia</p>
      <p class="texperiencia2">Estagio<br></br>Findes 2022-2024</p>
      <p>atuava em suporte para as escolas <br></br>sesi e senai usando o sistema totvs</p>
        {/* Add your experience cards here */}
      </div>
    </section>
  );
}

function Formacao() {
    return (
      <section id="Formacao">
        <h2>Formacao</h2>
        <div className="experiencia-container">
        <p class="texperiencia1">Sistemas de Informação</p>
        <p class="texperiencia2">UVV 2021-atualmente</p>
        </div>
      </section>
    );
  }
export default Formacao;
