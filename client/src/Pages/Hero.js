import { Box, Button, Container, fontWeight, styled } from "@mui/system";
// import { Container } from "@mui/material";
import React from "react";
import {Typography} from '@mui/material';


// import Appbar from "./Appbar"


// import heroImg from  './media/download'
// import CustomButton from "./CustomButton";


const Hero = () => {
    const CustomBox = styled(Box)(({theme}) => ({
        display: 'flex',
        justifyContent: 'center',
        gap: theme.spacing(5),
        marginTop: '200px',
        [theme.breakpoints.down("sm")]: {
            flexDirection:'column',
            alignitems:"center",
            textAlign: 'center',
        },

    }));

    const Title = styled(Typography)(({theme}) => ({
        fontSize: '64px',
        color: '#000336',
        fontWeight: 'bold',
        margin: theme.spacing(4, 0, 4, 0),
        [theme.breakpoints.down('sm')]: {
            fontSize: '40px'
        }
    }));

    return (
        <Box sx={{backgroundColor: '#F2949C'}}>
            <Container>
               
                <CustomBox>
                    <Box sx={{flex:'1'}}>
                        <Typography>
                            variant="body2"
                            sx={{
                               fontWeight: '500',
                                fontSize: '18px',
                                color: '#000100',
                                mt: 10,
                                mb: 4
                            }}
                            HELLO DEVS
                        </Typography>

                    </Box>
                </CustomBox>
            </Container>
        </Box>
    )
}

export default Hero;