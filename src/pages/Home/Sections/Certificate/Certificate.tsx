import React from "react";
import Slider from "react-slick";
import { Box, Paper, Typography, Button } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ccna from "/public/images/CCNAITN__1_.png";
import oracle from "/public/images/C_Oracle.png";
import rhacademy from "/public/images/C_RedHat.png";
import guxui from "/public/images/C_UXUI_Google.png";


const certificates = [
  {
    title: "Cisco Network",
    emitente: "Cisco NetAcademy",
    description: "Redes de Computadores",
    image: ccna,
    link: "https://www.credly.com/badges/8bd1f0a5-2cae-471b-b11a-3124c2ad70d9/public_url"
  },
  {
    title: "Database Programming with SQL",
    emitente: "Oracle",
    description: "Banco de dados Oracle",
    image: oracle,
    link: "https://academy.oracle.com/en/oa-new-member-hub.html"
  },
  {
    title: "Red Hat System Administration I (RH124)",
    emitente: "Red Hat",
    description: "Linux e Sistemas Operacionais",
    image: rhacademy,
    link: "https://rha.ole.redhat.com/rha/api/certificates/attendance/uuid/37b279bd-cac3-4bf6-ae71-9ead6f8b9f9a"
  },
  {
    title: "Foundations of User Experience (UX) Design",
    emitente: "Google",
    description: "Experiência do usuário (UX) · UX/UI · Design de experiência do usuário (UX)",
    image: guxui,
    link: "https://www.coursera.org/account/accomplishments/verify/QA7TORU3KM5Z"
  },
];

const Certificate: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ width: "100%", mt: 10 }}>
      <Typography variant="h2" color="primary.contrastText" mb={3} textAlign="center">
        Meus Certificados
      </Typography>
      <Slider {...settings}>
        {certificates.map((cert, index) => (
          <Box key={index} p={2}>
            <Paper
              elevation={4}
              sx={{    display: 'flex',
                flexDirection: 'row',
                backgroundColor: '#0000006e',
                borderRadius: 4,
                border: '2px solid #CEDC00',
                overflow: 'hidden',
                height: 220,
                transition: '0.3s ease-in-out',
                '&:hover': {
                  boxShadow: '0 0 4px 4px #CEDC00',
                  transform: 'scale(1.02)',
                },
            }}
            >
              <Box
                component="img"
                src={cert.image}
                alt={cert.title}
                sx={{
                  width: '40%',
                  objectFit: 'cover',
                }}
              />
              <Box
                p={2}
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                sx={{ flex: 1 }}
              >
                <Typography variant="h6" color="primary.contrastText">
                  {cert.title}
                </Typography>
                <Typography variant="subtitle2" color="primary.contrastText">
                  {cert.emitente}
                </Typography>
                <Typography variant="body2" color="primary.contrastText">
                  {cert.description}
                </Typography>
                <Button
                  variant="outlined"
                  color="inherit"
                  href={cert.link}
                  target="_blank"
                  sx={{
                    mt: 1,
                    alignSelf: 'flex-start',
                    borderColor: '#CEDC00',
                    color: '#CEDC00',
                    '&:hover': {
                      borderColor: '#CEDC00',
                      backgroundColor: '#CEDC0033',
                    },
                  }}
                >
                  Ver
                </Button>
              </Box>
            </Paper>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Certificate;
