import React, { JSX } from 'react';
import { Typography, Card, CardContent, Box, Grid } from '@mui/material';
import { styled } from '@mui/system';


// Importando ícones do Material UI
import {
  SiHtml5 as HtmlIcon,
  SiCss3 as CssIcon,
  SiJavascript as JavascriptIcon,
  SiReact as ReactIcon,
  SiTypescript as TypeScriptIcon,
  SiTailwindcss as TailwindIcon,
  SiMui as MuiIcon,
  SiBootstrap as BootstrapIcon,
  SiFigma as FigmaIcon,
  SiGithub as GithubIcon,
  SiMongodb as MongodbIcon,
  SiMysql as MySqlIcon,
  SiPython as PythonIcon,
  SiAdobephotoshop as PhotoshopIcon,
  SiAdobeillustrator as IllustratorIcon,
  SiAdobeindesign as IndesignIcon,
  SiLinux as LinuxIcon,

  
} from 'react-icons/si';

import { BsFileEarmarkExcelFill as ExcelIcon } from 'react-icons/bs';
import { BsClipboardFill as PowerBiIcon } from 'react-icons/bs';

type Skill = {
  name: string;
  icon?: JSX.Element;
};

const skillsData: {
  title: string;
  skills: Skill[];
}[] = [
  {
    title: 'Front-end e Design',
    skills: [
      { name: 'HTML', icon: <HtmlIcon color='white' /> },
      { name: 'CSS', icon: <CssIcon color='white'/> },
      { name: 'JavaScript', icon: <JavascriptIcon color='white'/> },
      { name: 'React', icon: <ReactIcon color='white'/> },
      { name: 'TypeScript', icon: <TypeScriptIcon color='white'/> },
      { name: 'Tailwind CSS', icon: <TailwindIcon color='white'/> },
      { name: 'Material UI', icon: <MuiIcon color='white'/> },
      { name: 'Bootstrap', icon: <BootstrapIcon color='white'/> },
      { name: 'Figma', icon: <FigmaIcon color='#ffffff'/> },
      { name: 'Photoshop', icon: <PhotoshopIcon color='#ffffff'/> },
      { name: 'Illustrator', icon: <IllustratorIcon color='#ffffff'/> },
      { name: 'Indesign', icon: <IndesignIcon color='#ffffff'/> },
      

    ],
  },
  {
    title: 'Back-end e Banco de Dados',
    skills: [
      { name: 'MongoDB', icon: <MongodbIcon color='white'/> },
      { name: 'MySQL', icon: <MySqlIcon color='white'/> },
      { name: 'Python', icon: <PythonIcon color='white'/> },
      { name: 'Git', icon: <GithubIcon color='white'/> },
      {name: 'Excel', icon: <ExcelIcon color='white'/> },
      { name: 'Power BI', icon: <PowerBiIcon color='white'/> },
      { name:'Linux', icon: <LinuxIcon color='white'/> },


    ],
  },
  {
    title: 'Soft Skills',
    skills: [
      { name: 'Comunicação' },
      { name: 'Trabalho em equipe' },
      { name: 'Liderança' },
      { name: 'Resolução de problemas' },
      { name: 'Pensamento crítico' },
      { name: 'Adaptabilidade' },
      { name: 'Proatividade' },
      { name: 'Organização' },
    ],
  },
];

// Estilo do Card com hover glow
const SkillCard = styled(Card)(({ }) => ({
  borderRadius: 10,
  padding: 16,
  border: '1px solid #CEDC00',
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 0 15px #CEDC00, 0 0 30px #CEDC00',
  },
}));

const Skills: React.FC = () => {
  return (
    <Box sx={{ width: '100%' }} marginTop={10}>
      <Typography
        variant="h1"
        component="h2"
        color="primary.contrastText"
        marginBottom={5}
        textAlign="center"
      >
        Skills
      </Typography>

    <Grid container spacing={4}>
      {skillsData.map((category, index) => (
        <Grid key={index} item xs={12} md={4}>
          <SkillCard elevation={3}>
          <CardContent>
<Typography variant="h3" gutterBottom color="primary.contrastText" textAlign="center">
  {category.title}
</Typography>

<Grid container spacing={2}>
  {category.skills.map((skill, idx) => (
    <Grid item xs={6} key={idx}>
      <Box display="flex" alignItems="center">
        {skill.icon && (
          <Box mr={1}>
            {React.cloneElement(skill.icon, { sx: { color: 'white', fontSize: 28 } })}
          </Box>
        )}
        <Typography color="primary.contrastText">{skill.name}</Typography>
      </Box>
    </Grid>
  ))}
</Grid>
</CardContent>
          </SkillCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
