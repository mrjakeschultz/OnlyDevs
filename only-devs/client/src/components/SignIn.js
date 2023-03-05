import  React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import  TextField from '@mui/material/TextField';
import  FormControlLabel  from '@mui/material/FormControlLabel';
import  Box  from '@mui/material/Box';
import Grid  from '@mui/material/Grid';
import Paper  from '@mui/material/Paper';
// import  {createTheme, ThemeProvider}  from '@mui/material/styles';
import  Typography  from '@mui/material/Typography';




// const theme = createTheme({});

export default function SignInAside() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
     };

     return (
        <>

    <Grid container component="main" sx={{height: '100vh'}}>
        <CssBaseline />
        <Grid 
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
            // DIMENSIONS 746pxw/1119h
            backgroundImage:'', 
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            //////figure out bg color  palette
            backgroundColor:'primary'  
        }}
        /> 
<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
    <Box
    sx={{
        my: 8,
        mx: 4,
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }}
    >
        {/* //small logo here//  sx{{ m:1, bgcolor: idk}} */}
        <Typography component="h1" variant="h5">
            SignIn
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{mt:1}}>
           <TextField
           margin="normal"
           required
           fullWidth
           id='username'
           label="USERNAME"
           name="username" 
           autocomplete='username'
           autofocus
           />
          
           <TextField
           margin="normal"
           required
           fullWidth
           id='password'
           label="Password"
           name="password" 
           autocomplete='password'
           />
           <FormControlLabel
           control={<Checkbox value="remember" color='primary' />}
           label="JSONPromise to Remember Me"
           />
           <Button
           type="submit"
           fullWidth
           variant="contained"
           sx={{mt:3, mb:2}}
           >
            Sign In
           </Button>
           <Grid item>
            {/* //IF THEY DON't ALREADY HAVE AN ACCOUNT THEN HYPERLINK TO SIGN UP PAGE// */}
          
           </Grid>
        </Box>
    </Box>
</Grid>
    </Grid>

               </>
     );
     }