import React from "react";
import Slider from "react-slick";
import { Paper, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Projects/Projects.css"; // Estilização opcional
import Button from '@mui/material/Button';




const projects = [
    {
      title: "ProntoSOS",
      description: "otimização de filas de pronto atendimento",
      image: "/images/prontoSOS.png",
      
      link: "https://www.behance.net/gallery/179952303/Projeto-ProntoSOS"
    },
    {
      title: "Dashboard figma",
      description: "Dashboard de uma clínica de estética",
      image: "/images/dashboard_estetica.png",
      link: "https://www.behance.net/gallery/180402561/Dashboard-Estetica"
    },
    {
      title: "contagem populacional",
      description: "contagem populacional em tempo real do Brasil e Mundo",
      image: "contagem_pop.png",
      link: "https://metricas-a.vercel.app"
    },
    {
      title: "JustGo",
      description: "Descrição do Projeto 4",
      image: "justgo.png",
      link: "https://www.behance.net/gallery/224256961/JustGO"
    },
  ];

<Typography variant="h1" component="h2" color="primary.contrastText" marginTop={10} marginBottom={5}>
  Meus Projetos
</Typography>

const Projects: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="project-carousel">
      <Typography variant="h2" gutterBottom color="primary.contrastText" marginTop={10}>
        {"Meus Projetos"}
      </Typography>
      <Slider {...settings}>
      {projects.map((project, index) => (

        <div key={index} style={{ padding: "3px" }}>

          <Paper key={index} className="project-card" elevation={3} style={{ backgroundColor: "#0000006e" }}>
            <img src={project.image as string} alt={project.title} className="project-image" />
            <Typography variant="h6" color="primary.contrastText">{project.title}</Typography>
            <Typography variant="body2" color="primary.contrastText">{project.description}</Typography>
            <Button 
              
              
              variant="outlined"
              color="inherit"
              href={project.link}
              target="_blank"
              sx={{
                mt: 1,
                
                borderColor: '#CEDC00',
                color: '#CEDC00',
                '&:hover': {
                  borderColor: '#CEDC00',
                  backgroundColor: '#CEDC0033',

                },
              }}
            >
              Ver Projeto
            </Button>
          </Paper>
        </div>
        ))}
      </Slider>
    </section>
  );
};

export default Projects;