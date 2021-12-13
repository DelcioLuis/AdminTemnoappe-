import * as React from 'react';
import Typography from '@mui/material/Typography';

interface TitleProps {
  children?: React.ReactNode;
}

export default function Title(props: TitleProps) {
  return (
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      {props.children}
     {/*  <p style={{fontSize:14, color:"#ddd"}}>Clique em um produto para edita-lo</p> */}
    </Typography>
  );
}
