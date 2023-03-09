import React, {useState} from 'react';


import  { AppBar, Box, InputBase, Avatar, Menu, MenuItem,
    Button, Toolbar, styled, Tabs, Tab, Grid, Typography, Paper } from '@mui/material';

                         

/////just trying to get the skeleton sone first before the outfit
/////palepink: #F2949C
///// blue: #6092A6
/////yellow: #F2B749
/////red/pink:#F23838
////////#000100 black
/////white: #FFFDEA



export default function HomePage() {
    
    ////////////////////////////////////////////////////////////
const StyledToolBar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between'
})
    const [value, setValue] = useState()
    const CustomButton1 = styled(Button)(({theme})=>({
  backgroundColor: '#F2B749',
margin: 5,
color: '#FFFDEA',
'&:hover': {
backgroundColor:'#F2949C'
},
"&:disabled": {
backgroundColor: 'gray',
color: 'white'
},
}))
////////////////////////SEARCH BAR//////////////////////////////////////////
const Search = styled("div")(({theme})=> ({
    backgroundColor: 'white',
    padding: '0 10px',
    borderRadius:theme.shape.borderRadius
}));
const IconsBtns = styled("Box")(({theme})=> ({ display: 'flex'
    
}));
const UserBox = styled("Box")(({theme})=> ({
    display: 'flex',
    alignItems: "center",
    gap: "10px",
    
}));
    // const [open, setOpen ] = useState(false)
    return (
<>
      
            <AppBar position='stick' component={Paper} elevation={3}
            sx={{  bg: '#000100'}}>
                <StyledToolBar>
                    {/* ///Typography for now but i plan on designing the logo for us */}
                    <Typography sx={{display: {xs:'none', sm:'block'}}}>
                        OnlyDevs*
                    </Typography>
                    {/* <logo> sx={{display: {xs:'none', sm:'block'}}}</logo> */}
                    <Box  sx={{ }}>

                    <Tabs textcolor='#FFFDEA' 
                    value={value} 
                    onclick={(e, value)=> setValue(value) } 
                    indicatorColor=''>
                        <Tab sx={{color: 'white', display: {xs:'none', sm:'block'}}} label="Login"/>
                        <Tab sx={{color: 'white',display: {xs:'none', sm:'block'}}} label="Sign Up"/>
                    </Tabs>
                        </Box>
                    <Search><InputBase placeholder="🔍"/></Search>

                    {/* <CustomButton1 sx={{ marginLeft: 'auto'}} variant="contained">SignIn  {''}</CustomButton1> */}
                    <IconsBtns >
                    <Button>🔔</Button>
                    <Button>✉️</Button>
                    </IconsBtns>
                    <Avatar sx={{ width: '30px', height: '30px', bgcolor:'#F23838' }}>K</Avatar>

                    <Button sx={{display: {xs:'none'}}} variant="contained">Logout</Button>
                </StyledToolBar>
                {/* <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
      
        open={true}
        
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu> */}

            </AppBar>
        
            </>

        
    )
}


    //     <Paper  sx={{
    //         mt: '200px'
    //     }}
    //     variant= 'outlined' square elevation={3}>
    // <div sx={{
    //     display: 'flex'
    //  }}> 
    //  <ul>
    //     <li> fuck you, mui can suck dinky</li>
    //  </ul>

    //  </div>

    //     </Paper>