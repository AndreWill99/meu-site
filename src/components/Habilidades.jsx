import React from "react";
import "../styles/skills.css";

const Habilidades = () => {
  const skillsList = [
    "HTML / CSS / JavaScript",
    "Figma",
    "Experiência de Usuário",
    "SQL",
    "Python",
    "Estatística Básica",
    "Power BI",
    "Excel",
    "Design",
    "Edição de Vídeo"
  ];

  return (
    <section className="skills">
      <h3>Habilidades</h3>
      <ul>
        {skillsList.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Habilidades;
