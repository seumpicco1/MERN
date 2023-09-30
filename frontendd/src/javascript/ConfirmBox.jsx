import {
  Dialog,
  DialogContent,
  Fade,
  Grid,
  IconButton,
  Box,
  Typography,
  Button,
} from "@mui/material";
import React, { forwardRef } from "react";

const Transition = forwardRef(function Transition(props, ref) {
  return <Fade ref={ref} {...props} />;
});

const ConfirmBox = ({ open, closeDialog, deleteFuction,title}) => {
  return (
    <Dialog
      
      open={open}
      maxWidth="md"
      scroll="body"
      onClose={closeDialog}
      onBackdropClick={closeDialog}
      TransitionComponent={Transition}
    >
      <DialogContent sx={{ px: 8, py: 5, position: "relative" }}>
        <IconButton
          size="large"
          onClick={closeDialog}
          sx={{ position: "absolute", right: "1rem", top: "1rem" }}
        >
          X
        </IconButton>

        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Box
              sx={{
                mb: 3,
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "column",
              }}
            >
              <Typography variant="h5"  className="text-red-600">Delete  
              
               </Typography>

              <Typography variant="body1">
                Are you sure you want to delete this   <span className="text-green-500">{title}</span>  ? 
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}  sx={{display:"flex", justifyContent:"flex-end", gap:"1rem"}}>
          
          

              <Button  onClick={deleteFuction} size="small" variant="contained" color="error">
            Delete
              </Button>
              <Button onClick={closeDialog} size="small" variant="contained" color="primary">
            Cancel 
              </Button>
            
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmBox;
