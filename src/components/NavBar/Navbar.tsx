import { AppBar, MenuItem, styled, Toolbar } from "@mui/material";

const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const Navbar = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-evenly",
    backgroundColor: "#000000",
    opacity: 0.85,
  });



  const AnimatedMenuItem = styled(MenuItem)({
    position: "relative",
    color: "#fff",
    fontWeight: "bold",
    transition: "transform 0.3s ease-in-out",
    "&::after": {
      content: '""',
      position: "absolute",
      left: "50%",
      bottom: "0px",
      transform: "translateX(-50%) scaleX(0)",
      transformOrigin: "center",
      width: "90%",
      height: "5px",
      background: "#ccff00",
      borderRadius: "12px",
      transition: "transform 0.4s ease-in-out",
      boxShadow: `
        0 -2px 10px #ccff00,
        0 -6px 20px #00ff88,
        0 -10px 30px rgba(0, 255, 136, 0.6)
      `,
      
      zIndex: -1,
    },
    "&:hover": {
      transform: "scale(1.15)",
      color: "#ccff00",
      textShadow: "0 0 8px #ccff00",
    },
    "&:hover::after": {
      transform: "translateX(-50%) scaleX(1)",
    },
  });

  return (
    <AppBar position="static" elevation={0}>
      <StyledToolbar>
        <AnimatedMenuItem onClick={() => scrollToSection('About')}>Sobre</AnimatedMenuItem>
        <AnimatedMenuItem onClick={() => scrollToSection('skills')}>Skills</AnimatedMenuItem>
        <AnimatedMenuItem onClick={() => scrollToSection('projects')}>Projetos</AnimatedMenuItem>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
