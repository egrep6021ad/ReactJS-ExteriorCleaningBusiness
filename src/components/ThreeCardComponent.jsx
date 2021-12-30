import { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import * as React from 'react';
import Button from '@mui/material/Button';
import "../App.css"
import ListAvatarComponent from './ListAvatarComponent';
import CardComponent from './CardComponent';
import ResponsiveAppBar from './HeaderComponent';
import WovenImageList from './WovenImageList';
class ThreeCardComponent extends Component {
    render() {
        return (
            <div>
                <div style={{paddingTop:'50%',paddingLeft:'10%', paddingBottom:'10%'}}>
        <Card style={{width: '90%' ,borderRadius:'10px', borderWidth:'5px',borderColor:'#385F9B'}}>
        <Card.Img style={{ borderTopLeftRadius:'3px',borderTopRightRadius:'3px'}} variant="top" src="https://h2gomobilewash.com/app/uploads/2020/05/power-vs-pressure-washing-whats-the-difference.jpg"  />
          <Card.Body style={{margin:'5'}}>
            <Card.Title>Commercial Services</Card.Title>
            <Card.Text>
              Our partners and engineers nationwide provide easy & cost effecient resources nationwide.
            </Card.Text>
            <Button style={{backgroundColor:'#385F9B', borderRadius:'2rem',borderColor:'white'}} variant="primary">Explore</Button>
          </Card.Body>
        </Card>
        </div>

        <div style={{paddingLeft:'10%',paddingBottom:'10%', backgroundColor:'#F9F1E9'}}>
            <Card style={{width: '90%' ,borderRadius:'10px', borderWidth:'5px',borderColor:'#385F9B'}}>
        <Card.Img style={{ borderTopLeftRadius:'3px',borderTopRightRadius:'3px'}} variant="top" src="https://www.linku.com.au/wp-content/uploads/2020/01/Gutter-Cleaning-Use-a-Garden-Hose-1024x683.jpeg"  />
          <Card.Body>
            <Card.Title>Pressure Washing</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button style={{backgroundColor:'#385F9B',borderRadius:'2rem',borderColor:'white'}} variant="primary">Explore</Button>
          </Card.Body>
        </Card>
        </div>
        <div>
        <CardComponent />
        <div style={{paddingLeft:'10%',paddingBottom:'10%', backgroundColor:'#F9F1E9'}}>
        <Card style={{width: '90%' ,borderRadius:'10px', borderWidth:'5px',borderColor:'#385F9B'}}>
          <Card.Img style={{ borderTopLeftRadius:'3px',borderTopRightRadius:'3px'}} variant="top" src="https://media.istockphoto.com/photos/exterior-cleaning-work-in-progress-picture-id1336188285?k=20&m=1336188285&s=612x612&w=0&h=mE1FaZzb1pYoginfAaIDCf6Dzxk7E9WuZ70g_2IL6TQ="  />
          <Card.Body>
            <Card.Title>Soft Washing</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button style={{backgroundColor:'#385F9B', borderRadius:'2rem',borderColor:'white'}} variant="primary">Explore</Button>
          </Card.Body>
        </Card>
                <footer style={{paddingTop:'10px',fontSize:'20px',display:'flex', alignItems:'center', justifyContent:'center'}}>
                    All Rights Reserved 2022 @ Advanced Exterior Services&trade;
                    </footer>
                </div>
            </div>
                
            </div>
        )
    }
}
export default ThreeCardComponent

