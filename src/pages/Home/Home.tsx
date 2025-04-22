import Navbar from "../../components/NavBar/Navbar";
import Hero from "./Sections/Hero/Hero";
import About from "./Sections/About/About";
import Infos from "./Sections/Infos/Infos";
import Projects from "./Sections/Projects/Projects";
import BackgroundGlow from "./BackgroundGlow";
import Skills from "./Sections/Skills/Skills";
import Certificate from "./Sections/Certificate/Certificate";
import Footer from "./Sections/Footer/Footer";

/**
 * The main App component that serves as the entry point for the application.
 */
const  Home = () => {

    return (
      <>
        <BackgroundGlow /> 
        <Navbar />
        <Hero />
        <section id="About" > <About/> </section>
        <Infos/>
        <section id="skills"> <Skills/> </section>
        <section id="projects"> <Projects/> </section>
        <Certificate/>
        <Footer/>
            
      </>
    )
  };
  
  export default Home