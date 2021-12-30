import React, { Component } from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import HeaderComponent from './HeaderComponent'
import { ListItemAvatar } from '@mui/material'
class ContactComponent extends Component {
render() {
  return (
   <div style={{width: '100%', height:'130vh',marginBottom:'0'}}>
    <HeaderComponent />
    <List sx={{marginLeft:'5%',marginBottom:'0rem',maxWidth: '90%', bgcolor: '#FAF8F6' ,marginTop:'10%',borderRadius:"15px",borderColor:'#385F9B'}}>
      <ListItem alignItems="center" >
          <ListItemAvatar>
         <Avatar style={{backgroundColor:'#5978A9'}}alt="Edward Altez" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText style={{color:'#385F9B',fontFamily:'Lexend Deca' }}
            primary="Edward Altez " 
            secondary={
            <React.Fragment>
            <Typography
            sx={{ display: 'inline' }}
            component="span"
            style={{fontFamily:'Lexend Deca', color:"#385F9B"}}
            >
            Feild Operations Manager
        </Typography>
    <br></br>
    <p style={{paddingBottom:'0',fontFamily:'Lexend Deca', color:"#385F9B"}}>Commercial Services</p>
    <p style={{paddingLeft:'0px',fontFamily:'Lexend Deca',fontSize:'80%', color:"#385F9B"}}>Admin@Advancedexteriorservices.com</p>
    <p style={{paddingLeft:'0px',fontFamily:'Lexend Deca',fontSize:'80%', color:"#385F9B"}}>770-209-2707 </p>


    </React.Fragment>
    }
/>
</ListItem>

<Divider variant="inset" component="li" />
<ListItem alignItems="flex-start">
    <ListItemAvatar>
    <Avatar style={{backgroundColor:'#5978A9'}} alt="Khalfani Bozeman" src="/static/images/avatar/2.jpg" />
    </ListItemAvatar>
    <ListItemText style={{color:'#385F9B',fontFamily:'Lexend Deca'}}
        primary="Khalfani Bozeman "
        secondary={
        <React.Fragment>
        <Typography
        sx={{ display: 'inline' }}
        component="span"
        style={{fontFamily:'Lexend Deca', color:"#385F9B"}}
        >
        Field Operations Manager
        </Typography>
        <br></br>
        <p style={{paddingBottom:'0',fontFamily:'Lexend Deca', color:"#385F9B"}}>Residential / HOA Services</p>
        <p style={{paddingLeft:'0px',fontFamily:'Lexend Deca',fontSize:'80%', color:"#385F9B"}}>Khalfani@Advancedexteriorservices.com</p>
        <p style={{paddingLeft:'0px',fontFamily:'Lexend Deca',fontSize:'80%', color:"#385F9B"}}>770-209-2707</p>

        </React.Fragment>
     }
 />
</ListItem>

<Divider variant="inset" component="li" />
<ListItem alignItems="flex-start">
    <ListItemAvatar>
        <Avatar style={{backgroundColor:'#5978A9'}} alt="Marcy Kenders" src="/static/images/avatar/3.jpg" />   
    </ListItemAvatar>
        <ListItemText style={{fontFamily:'Bubblegum Sans', color:"#385F9B"}}
        primary="Marcy Kenders"
        secondary={
        <React.Fragment>
        <Typography
        sx={{ display: 'inline' }}
        component="span"
        style={{fontFamily:'Lexend Deca', color:"#385F9B"}}
        >
        Regional Billing Administrator
        </Typography>
        <br></br>
        <p style={{paddingBottom:'0',fontFamily:'Lexend Deca', color:"#385F9B"}}>Administrative Services</p>
        <p style={{paddingLeft:'0px',fontFamily:'Lexend Deca',fontSize:'80%', color:"#385F9B"}}>Info@Advancedexteriorservices.com</p>
        <p style={{paddingLeft:'0px',fontFamily:'Lexend Deca',fontSize:'80%', color:"#385F9B"}}>770-209-2707 (ext. 1771)</p>


        </React.Fragment>
  }
/>
</ListItem>
<div>
<Divider variant="inset" component="li" />
    <ListItem alignItems="flex-start" style={{fontFamily:'Lexend Deca'}} >
    <ListItemAvatar>
        <Avatar style={{backgroundColor:'#5978A9'}} alt="Travis Howard" src="/static/images/avatar/3.jpg" />
    </ListItemAvatar>
        <ListItemText style={{fontFamily:'Lexend Deca', color:"#385F9B"}}
        primary="Travis Howard"
        secondary={
        <React.Fragment>
        <Typography
        sx={{ display: 'inline' }}
        component="span"
        style={{fontFamily:'Lexend Deca', color:"#385F9B"}}
        >
        Associate Software Engineer
        </Typography>
        <br></br>
        <p style={{paddingBottom:'0',fontFamily:'Lexend Deca', color:"#385F9B"}}>Administrative Services</p>
        <p style={{paddingLeft:'0px',fontFamily:'Lexend Deca',fontSize:'80%', color:"#385F9B"}}>Techservices@Advancedexteriorservices.com</p>
        <p style={{paddingLeft:'0px',fontFamily:'Lexend Deca',fontSize:'80%', color:"#385F9B"}}>770-209-2707 (ext. 1091)</p>

        </React.Fragment>
    }
    />
   </ListItem>
   </div>
</List>
<div>
   </div>
</div>

    )
  }
}
export default ContactComponent
