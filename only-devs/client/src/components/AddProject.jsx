import { Tooltip, Box, TextField, Fab, Modal} from "@mui/material";
import {React, useState} from "react";
import AddIcon from '@mui/icons-material/Add';




const AddProject = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
<Tooltip  onClick={e=>setOpen(true)} ml={2} title="Add" sx={{position:"fixed", bottom: 20, left:{xs:"calc(50% - 25px}", md:30}}}>

     <Fab color='#F2B749' aria-label="add">
       <AddIcon/>
        </Fab>
    </Tooltip>
    
    <Modal
  open={open}
  onClose={e=>setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box >
   
  </Box>
</Modal>
        </>
    )
}

///if the button is clicked or value appear return  this block of code 
export default AddProject;