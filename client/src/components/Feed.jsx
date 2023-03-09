import React from 'react'
import Project from './Project'
import {Box, Card, CardHeader, Checkbox, Avatar, IconButton, CardMedia, CardContent, Typography, CardActions, } from '@mui/material'



const Feed  = () => {
    return(
        <Box flex={4} p={2}>
      <Project/>
      <Project/>
      <Project/>
      <Project/>
      <Project/>
        </Box>
    )
}

export default Feed