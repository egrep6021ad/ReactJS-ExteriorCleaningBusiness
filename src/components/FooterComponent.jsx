import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import MuiGrid from '@mui/material/Grid';

const Grid = styled(MuiGrid)(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 2),
  },
}));

function VerticalDividerText() {
  const content = (
    <div style={{ display:'flex',alignItems:'center',textAlign:'center',width:'100%',color:"#385F9B",fontFamily:'Lexend Deca', fontSize:'200%'}}>
      <div>


        <p>
        Our mission is to provide the curbside appeal our clients deserve! We achieve our mission in not only the most cost effective, but also most time efficient ways imaginable. Through a strict adherence to industry standards coupled with proprietary software, we offer the most convenient consumer experience in the Metro Atlanta Area.  
 No more taking time away from your business, family or personal goals waiting around for quotes for exterior services. Our quoting algorithm was developed so that our clients can get instant feedback for any of their exterior needs, allowing them to get back to the things that matter most.  
        </p>
        <br></br>
        <p>
        Beyond the solutions we provide for our clients, we pride ourselves in the impact small businesses can have on the communities that help support them. Our city has been affected heavily by the housing crises sweeping across the nation. Our personal mission is to dynamically integrate prior servicemen and women through active job training & employment. By 2024 we hope to have trained and employed over 65 priorly homeless veterans living in the Atlanta Area. Through these means and others, we hope to stay actively engaged in preserving the beauty and value of our communities.  If you would like more information on ways to get involved, please email Admin@Advancedexteriorservices.com.
        </p>
   </div>
    </div>
  );

  return (
    <Grid container style={{display:'flex', alignContent:'center', justifyContent:'center', width:'100%'}}>
      <Grid item lg>
        {content}
      </Grid>
  
    </Grid>
  );
}

function Copyright() {
  return (
    <Typography style={{color:"#385F9B",alignItems:'flex', display:'flex', justifyContent:'center',fontSize:'100%',fontFamily:'Amatic SC'}} color="text.secondary">
      {'Copyright © '}
        Advanced Exterior Services LLC 2022
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box
      sx={{
        backgroundColor: '#F9F1E9',
       width:'100%',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '30vh',
      }}
    >
      <CssBaseline />
      <Container component="main" sx={{mt: 8, mb: 2 }} maxWidth="md">
        <Typography style={{color:"#385F9B",width:'100%',display:'flex', alignItems:'center', justifyContent:'center',fontFamily:'Bubblegum Sans', fontSize:'350%'}} variant="h2" component="h1" gutterBottom>
          Our Community
        </Typography>
          <div style={{width:'100%'}}>
          <VerticalDividerText />
          </div>
          
      </Container>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: '#F9F1E9'
        }}
      >
        <Container maxWidth="lg" >
          <Typography >
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}