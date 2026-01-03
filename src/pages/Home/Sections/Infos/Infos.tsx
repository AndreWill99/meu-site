import React from 'react';
import {Typography, Card, CardContent, Box } from "@mui/material";
import Grid from '@mui/material/Grid2';


const Infos: React.FC = () => {
    const commonStyles = {
        borderRadius: 10,
        padding: 2,
        border: '1px solid #CEDC00',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        height: '100%',
        '&:hover': {
            transform: "scale(1.02)",
            boxShadow: "0 0 15px #CEDC00, 0 0 30px #CEDC00",
        }
    };

    return (
        <Box sx={{ width: '100%' }} justifyItems={'center'} marginTop={10}>
            <Grid container spacing={3}>
                <Grid size={{xs: 12, md:6}}>
                    <Card 
                            elevation={3} 
                            className="info-box" 
                            sx={commonStyles}
                        >
                            <CardContent sx={{ textAlign: 'center', width: '100%' }}>
                                <Typography color="primary.contrastText" variant="h2" gutterBottom align="center">Experiência</Typography>
                                <Typography color="primary.contrastText" variant="h3" align="center">
                                    Findes 
                                </Typography>
                                <Typography color="primary.contrastText" variant="body1" align="center">
                                    Estagiário    
                                    <br/>
                                    2022-2024                
                                </Typography>
                            </CardContent>
                        </Card>
                </Grid>

                <Grid size={{xs: 12, md:6}}>
                    <Card 
                        variant="outlined" 
                        className="info-box"
                        sx={commonStyles}
                    >
                        <CardContent sx={{ textAlign: 'center', width: '100%' }}>
                            <Typography color="primary.contrastText" variant="h2" gutterBottom align="center">Formação</Typography>
                            <Typography color="primary.contrastText" variant="body1" align="center">
                                Sistemas de Informação
                                <br />
                                Bacharelado UVV
                            </Typography>
                            <Typography color="primary.contrastText" variant="body1" align="center">
                                2020 - 2025
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>    
    );
};

export default Infos;