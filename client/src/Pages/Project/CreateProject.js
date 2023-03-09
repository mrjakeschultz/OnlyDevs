import  React, {useState} from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';

import  TextField from '@mui/material/TextField';
import  FormControlLabel  from '@mui/material/FormControlLabel';
import  Box  from '@mui/material/Box';
import Grid  from '@mui/material/Grid';
import Paper  from '@mui/material/Paper';
// import  {createTheme, ThemeProvider}  from '@mui/material/styles';
import  Typography  from '@mui/material/Typography';


const CreateProjectForm = () => {
    ///make a useHistoy & useParams function in router-dom  to have data notes such as time created
    const {id} = useParams();
    const [title, setTitle] = useState( initialState, "" );

    const handleOnSubmit = async event => {
        event.preventDefault();
        
        const data = {
            title
            ///languagecategory [language id]
        };

        
    };

    return (


    
       
    }
}