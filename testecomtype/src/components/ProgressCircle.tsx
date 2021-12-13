import React, {useState, useMemo} from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import PhotoCameraIcon from '@material-ui/icons/VideoCall';
import { Grid } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import Title from "../shared/Title"

export default function ADDTEMA(open:any) {
 

  return (
    <React.Fragment>
      <div>
        <Dialog open={false}  aria-labelledby="form-dialog-title">
            <DialogContent style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                <CircularProgress /> 
                <Title>Aguarde um instante</Title>
            </DialogContent>

        </Dialog>
        </div>
    </React.Fragment>
  );
}