import { Box, Container, Grid, Typography, styled, Avatar } from "@mui/material";

import { useEffect, useRef } from "react";
import githubicon from '/images/githubcvlogo.png';
import linkedinicon from "/images/linkedin_cv_logo.png";
import wppicon from "/images/wpp_cv_logo.png";
import emailicon from "/images/email_cv_logo.png";


const Hero = () => {

  const StyledHero = styled("div")(() => ({
    height: "100vh",
    display: "flex",
    alignItems: "center",
  }));

  const StyledAvatar = styled(Avatar)(() => ({
    width: "300px",
    height: "300px",
    border: "6px solid #CEDC00",
    transition: "transform 0.3s ease-in-out",
    '&:hover': {
      boxShadow: '0 0 30px 4px #CEDC00',
      transform: 'scale(1.02)',
    }
}))

  

  const SocialIcon = styled("img")(() => ({
    width: "50px",
    height: "50px",
    margin: "0 8px",
    cursor: "pointer",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    borderRadius: "8px",
    '&:hover': {
      transform: "scale(1.2)",
      boxShadow: "0 0 15px #CEDC00, 0 0 30px #CEDC00",
    }
  }));

  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (imageRef.current) {
        const { left, top, width, height } = imageRef.current.getBoundingClientRect();
        const x = ((e.clientX - left) / width - 0.5) * 30;
        const y = ((e.clientY - top) / height - 0.5) * 30;
        imageRef.current.style.transform = `rotateX(${-y}deg) rotateY(${x}deg)`;
      }
    };

    const img = imageRef.current;
    if (img) {
      img.addEventListener("mousemove", handleMouseMove);
      img.addEventListener("mouseleave", () => {
        img.style.transform = "rotateX(0deg) rotateY(0deg)";
      });
    }

    return () => {
      if (img) {
        
        img.removeEventListener("mousemove", handleMouseMove);
        img.removeEventListener("mouseleave", () => {
          img.style.transform = "rotateX(0deg) rotateY(0deg)";
        });
      }
    };
  }, []);

  const handleClick = (url: string) => () => {
    window.location.href = url;
  };

  return (
    <StyledHero>
        
      <Container maxWidth="lg">
        <Grid container display="flex" justifyContent="center">
        <Grid item xs={12} md={5}>
            <Box position={"relative"}>
                <Box position={"relative"} top={0} left={0} width="100%" height="80%" display="flex" justifyContent="center" alignItems="center">
                <StyledAvatar 
                    alt="perfil" 
                    src="/images/perfil.png" 

                />

                </Box>
            </Box>
            </Grid>

          <Grid item xs={12} md={7}>
            <Typography color="primary.contrastText" variant="h1" textAlign="center">
              André William
            </Typography>
            <Typography color="primary.contrastText" variant="h2" textAlign="center">
              DEV-Front end, UX/UI Designer
            </Typography>

            <Grid container justifyContent="center" alignItems="center" spacing={3} padding={5}>
              <Grid item xs={12} md={12} display="flex" justifyContent="center" alignItems="center">
                <SocialIcon
                  src="/images/behance_cv_logo.png" 
                  alt="Behance logo"
                  onClick={handleClick("https://www.behance.net/andrwcabral")}
                />
                <SocialIcon
                  src={githubicon}
                  alt="Github logo"
                  onClick={handleClick("https://github.com/AndreWill99")}
                />
                <SocialIcon
                  src={linkedinicon}
                  alt="Linkedin"
                  onClick={handleClick("https://www.linkedin.com/in/andre-william-costa-33b873172/")}
                />
                <SocialIcon
                  src={wppicon}
                  alt="Whatsapp"
                  onClick={handleClick("https://wa.me/+554184520931")}
                />
                <SocialIcon
                  src={emailicon}
                  alt="email logo"
                  onClick={handleClick("mailto:andrewilliam2012@hotmail.com")}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyledHero>
  );
};

export default Hero;
