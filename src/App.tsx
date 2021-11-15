import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { Avatar, Grid } from '@mui/material';


export default function App() {
  return (
    <Container maxWidth="sm">
      <Grid container sx={{ mx: "auto" }} >
      <Box
        component="img"
        sx={{
          height: 100,
          width: 100,
          maxHeight: { xs: 100, md: 100 },
          maxWidth: { xs: 100, md: 100 },
        }}
        alt="The house from the offer."
        src="https://1.bp.blogspot.com/-gImT3poUoiw/YZINXuowy2I/AAAAAAAAFx0/EHJ56a_maE4G9ZKbDBMafWauhhmmCuPjACLcBGAsYHQ/s320/eden_logo-removebg-preview.png"
      />
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Eden Project
        </Typography>
      </Box>
      </Grid>
    </Container>
  );
}
