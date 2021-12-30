import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RequestQuoteOutlinedIcon from '@mui/icons-material/RequestQuoteOutlined';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
      <div style={{borderRadius:'29px',fontFamily:'Lexend Deca'}}>
        <div style={{paddingLeft:'10%'}}>
          <Card style={{backgroundColor:'#FAF8F6',height:'15%',borderRadius:'13px', width:'90%',marginBottom:'3rem',marginTop:'0rem'}}>
          <div style={{color:"#385F9B",fontFamily:'Lexend Deca',paddingTop:'10px',paddingBottom:'10px',alignItems:'center', display:'flex', justifyContent:'center', fontSize:'125%', fontWeight:'bold'}}>Commercial Services</div>
       
      
      <CardMedia
        component="img"
        height="400rem"
        image="https://h2gomobilewash.com/app/uploads/2020/05/power-vs-pressure-washing-whats-the-difference.jpg"
        alt="Commercial Exterior Cleaning"
        style={{borderColor:'black',borderWidth:'20px'}}
      />
      <CardContent style={{backgroundColor:'#FAF8F6'}}>
        <Typography style={{alignItems:'center', display:'flex', justifyContent:'center',fontSize:'100%',color:"#385F9B",fontFamily:'Lexend Deca'}}>
        "Our location hasn't looked this nice since we originally opened..."     </Typography> <span style={{marginLeft:'30%',color:"#385F9B"}}>-Union City 2020</span>
       
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="request" href="/add-client">
          <RequestQuoteOutlinedIcon />
        </IconButton>
        <IconButton aria-label="share" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.AdvancedExteriorServices.com%2F&amp;src=sdkpreparse"  >
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent >
          <Typography paragraph></Typography>
          <Typography paragraph style={{fontSize:'130%',color:"#385F9B",fontFamily:'Lexend Deca'}}>
          <ul> Exterior Cleaning</ul>
          <ul> Mechanical Equipment Cleaning</ul>
          <ul> Cold Storage Sanitation</ul>
          <ul> Sign & Billboard Cleaning</ul>
          <ul> Drive-through Refurbishing</ul>
          <ul> Disposal & Garbage Area Sanitation</ul>
          <ul>Stain & Graffiti Removal</ul>          </Typography> 
        </CardContent>
      </Collapse>
    </Card></div>
    <div style={{paddingLeft:'10%',color:"#385F9B",fontFamily:'Lexend Deca'}}>
          <Card style={{height:'15%',borderRadius:'13px', width:'90%',marginBottom:'3rem',marginTop:'0rem',backgroundColor:'#FAF8F6'}}>
          <div style={{paddingTop:'10px',paddingBottom:'10px',alignItems:'center', display:'flex', justifyContent:'center', fontSize:'125%', fontWeight:'bold',color:"#385F9B",fontFamily:'Lexend Deca'}}>Residential Services </div>
       
      
      <CardMedia
        component="img"
        height="400rem"
        image="https://media.istockphoto.com/photos/exterior-cleaning-work-in-progress-picture-id1336188285?k=20&m=1336188285&s=612x612&w=0&h=mE1FaZzb1pYoginfAaIDCf6Dzxk7E9WuZ70g_2IL6TQ="
        alt="Commercial Pressure Washing"
      />
      <CardContent >
      <Typography style={{alignItems:'center', display:'flex', justifyContent:'center',fontSize:'100%',color:"#385F9B",fontFamily:'Lexend Deca'}}>
      "I could not believe how quick, easy and affordable this entire process was going to be!" </Typography> <span style={{marginLeft:'20%',color:"#385F9B"}}>-Roswell 2021</span>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="request" href="/add-client">
        <RequestQuoteOutlinedIcon />
        </IconButton>
        <IconButton aria-label="share" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.AdvancedExteriorServices.com%2F&amp;src=sdkpreparse"  >
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph></Typography>
          <Typography paragraph style={{fontSize:'130%',color:"#385F9B",fontFamily:'Lexend Deca'}}>
            <ul>Roof Cleaning</ul>
            <ul>House & Siding Cleaning</ul>
            <ul>Gutter Cleaning</ul>
            <ul>Concrete Washes</ul>
          </Typography> 
        </CardContent>
      </Collapse>
    </Card></div>
    <div style={{paddingLeft:'10%'}}>
          <Card style={{height:'15%',borderRadius:'13px', width:'90%',marginBottom:'3rem',marginTop:'0rem',backgroundColor:'#FAF8F6'}}>
          <div style={{paddingTop:'10px',paddingBottom:'10px',alignItems:'center', display:'flex', justifyContent:'center', color:"#385F9B",fontSize:'125%',fontFamily:'Lexend Deca',fontWeight:'bold'}}> HOA's </div>
      <CardMedia
        component="img"
        height="400rem"
        image="https://www.linku.com.au/wp-content/uploads/2020/01/Gutter-Cleaning-Use-a-Garden-Hose-1024x683.jpeg"
        alt="Residential Pressure Washing"
      />
      <CardContent >
      <Typography style={{alignItems:'center', display:'flex', justifyContent:'center',fontSize:'100%',color:"#385F9B",fontFamily:'Lexend Deca'}}>
        "The overall value of our community exponentiated when..."  </Typography> <span style={{marginLeft:'30%',color:"#385F9B"}}>-Powder Springs 2020</span>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="request" href="/add-client">
        <RequestQuoteOutlinedIcon />
        </IconButton>
        <IconButton aria-label="share" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.AdvancedExteriorServices.com%2F&amp;src=sdkpreparse"  >
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent >
          <Typography paragraph></Typography>
          <Typography style={{fontSize:'130%',color:"#385F9B",fontFamily:'Lexend Deca'}}>
          <ul> Community Package Plans </ul>
          <ul> General Landscaping </ul>
          <ul> Residential Roadway Refurbishing </ul>
          <ul> Club Houses </ul> 
          <ul> Tennis Courts </ul>    
          <ul> Recreational Areas & Playgrounds </ul>     
          <ul> Light Fixtures </ul>
          <ul> Holiday Lighting </ul>
                   </Typography> 
        </CardContent>
      </Collapse>
    </Card></div>
        </div>
    
  );
}
