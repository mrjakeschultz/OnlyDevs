import React, {useState} from 'react';


import  { AppBar, Box, Toolbar, Tabs, Tab, Grid, Typography, Paper } from '@mui/material';

                         

/////just trying to get the skeleton sone first before the outfit
/////palepink: #F2949C
///// blue: #6092A6
/////yellow: #F2B749
/////red/pink:#F23838
////////#000100 black
/////white: #FFFDEA



export default function LandingPage() {

    const [value, setValue] = useState()
    return (
<>
      
            <AppBar MuiAppBar-positionFixed component={Paper} elevation={3}
            sx={{  bg: '#000100'}}>
                <Toolbar>
                    {/* ///Typography for now but i plan on designing the logo for us */}
                    <Typography>
                        OnlyDevs*
                    </Typography>
                    <Box  sx={{ borderBottom: 1}}>

                    <Tabs textcolor='#FFFDEA' 
                    value={value} 
                    onclick={(e, value)=> setValue(value) } 
                    indicatorColor=''>
                        <Tab  label="🪺 Home"/>
                        <Tab  label="👋 About Us"/>
                        <Tab  label="💖🔥 Projects"/>
                        <Tab  label="💻 Devs"/>
                    </Tabs>
                        </Box>

                    <button sx={{ marginLeft: 'auto'}} variant="contained">SignIn  {''}</button>
                    <button sx={{ marginLeft: '8px'}}  variant="contained">SignUp</button>
                </Toolbar>

            </AppBar>
        <Paper  variant= 'outlined' square elevation={3}>
<Box>
    <Grid>
        item xs={3}
    </Grid>
</Box>
        </Paper>
            </>

        
    )
}

