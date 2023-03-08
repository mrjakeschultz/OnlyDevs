import { Tooltip, Box, TextField, styled, Fab, Modal} from "@mui/material";
import {React, useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import { createTheme } from '@mui/material/styles'



const StyledModal= styled(Modal)({
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
})

const AddProject = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
        {/* ///////suppose to be following along///// */}
<Tooltip  onClick={e=>setOpen(true)} ml={2} title="Add" 
sx={{position:"fixed",bottom:20, left:{xs:"calc(50% - 25px}", md:30}}}>

     <Fab color='#F2B749' aria-label="add">
       <AddIcon/>
        </Fab>
    </Tooltip>
    
    <StyledModal
  open={open}
  onClose={e=>setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={500} height={280} p={3} borderRadius={5} bgcolor="white">
   
  </Box>
</StyledModal>
        </>
    )
}

///if the button is clicked or value appear return  this block of code 
export default AddProject;



// onClick={e=>setOpen(true)} ml={2} title="Add" 
// sx={{position:"fixed",bottom:20, left:{xs:"calc(50% - 25px}", md:30}}}