import { Tooltip, Fab, IconButton} from "@mui/material";
import React from "react";
import {Add as AddIcon} from '@mui/icons-material'




const AddProject = () => {
    return (
<Tooltip title="Add" sx={{position:"fixed", bottom: 20}}>
    {/* ////////////////BUTTON NOT SHOWING UP//////////// */}
     <Fab color='#F2B749' aria-label="add">
       <AddIcon/>
        </Fab>
    </Tooltip>
    );
};

export default AddProject;