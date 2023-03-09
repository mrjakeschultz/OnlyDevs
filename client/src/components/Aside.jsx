import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {Box, Button, Typography, Avatar, AvatarGroup} from '@mui/material'



const Aside  = () => {
const itemData = [
    {
        img: 'https://avatars.dicebear.com/v2/female/4fecaa9f5c8f4ba50c7df69eac72bf37.svg',
        title: 'Avatar2'
    },
    {
        img: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
        title: 'Avatar2'
    },
    {
        img: 'https://gravatar.com/avatar/5de33e6a2cd7e6e66f8d76be0d4cb480?s=400&d=retro&r=x',
        title: 'Avatar2'
    },
    {
        img: 'https://gravatar.com/avatar/2c45465646a001299f009ef142c7bdda?s=400&d=robohash&r=x',
        title: 'Avatar2'
    },
    {
        img: 'https://i.pravatar.cc/56',
        title: 'Avatar2'
    },
    {
        img: 'https://gravatar.com/avatar/b7f9519fe07bc0ba1da21bcdf45ae103?s=400&d=monsterid&r=x',
        title: 'Avatar2'
    },
    {
        img: 'https://i.pravatar.cc/5600',
        title: 'Avatar2'
    },
    {
        img: 'https://i.pravatar.cc/95',
        title: 'Avatar2'
    },
    {
        img: 'https://gravatar.com/avatar/92dd64b420b1bf38647d164f048dcd20?s=400&d=robohash&r=xx',
        title: 'Avatar2'
    },
]
   
    return(
        <Box flex={2} p={2} sx={{
            display: {xs: "none",  sm:'block'}}}>
               <Box position="fixed">
<Typography variant="h6" fontWeight={100}>
    Collaborators
</Typography>
<AvatarGroup max={8}>
<Avatar sx={{bgcolor:'#F4CE45' }}>J</Avatar> 
<Avatar sx={{bgcolor:'#F2949C' }}>U</Avatar> 
<Avatar sx={{bgcolor:'#6092A6' }}>ST</Avatar> 
<Avatar sx={{bgcolor:'#F23838' }}>.</Avatar> 
<Avatar sx={{bgcolor:'#F4CE45' }}>US</Avatar> 
<Avatar sx={{bgcolor:'#000100' }}>L</Avatar> 
  {/* <Avatar alt="YoYo" src="" />
  <Avatar alt="CoderCrush" src="" />
  <Avatar alt="StackDatBooty" src="" /> */}
  <Avatar alt="Steve" src="" />
</AvatarGroup>

{/* ////////DISPLAY NEW USERS THAT CREATE ACCOUNTS? */}

<Typography 

    mt={2}
    mb={2}
variant="h6" fontWeight={100}>
    user.push(newDev)
</Typography >
<Button variant="text">Build A Network 🖧  </Button>
<ImageList sx={{width: 500, height: 400}} cols={3} rowHeight={150}>
   {itemData.map((item) => (
    <ImageListItem key={item.img}>
        <img src={`${item.img}?w=150&h=150&fit=crop&auto=format`} alt="" />
    </ImageListItem>
   ))}
</ImageList>



               </Box>
            </Box>
    )
}

export default Aside