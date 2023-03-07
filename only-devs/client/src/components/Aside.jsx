import React from 'react'
import {Box, Typography, Avatar, AvatarGroup} from '@mui/material'



const Aside  = () => {
    return(
        <Box flex={2} p={2} sx={{
            display: {xs: "none", sm:'block'}}}>
               <Box position="fixed">
<Typography variant="h6" fontWeight={100}>
    Collaborators
</Typography>
<AvatarGroup max={8}>
  <Avatar alt="PythonCutie" src="" />
  <Avatar alt="YoYo" src="" />
  <Avatar alt="CoderCrush" src="" />
  <Avatar alt="StackDatBooty" src="" />
  <Avatar alt="Steve" src="" />
</AvatarGroup>

{/* ////////DISPLAY NEW USERS THAT CREATE ACCOUNTS? */}

<Typography 
///////MARGIN and FONTWEIGHT ARE DOIN NOTHING////////
    mt={2}
    mb={2}
variant="h6" fontWeight={100}>
    user.push(newDev)
</Typography >
               </Box>
            </Box>
    )
}

export default Aside