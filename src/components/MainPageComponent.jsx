import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import * as React from 'react';
import "../App.css"
import CardComponent from './CardComponent';
import ResponsiveAppBar from './HeaderComponent';
import StickyFooter from './FooterComponent'
import MasonryImageList from './MasonryImageComponent';
class MainPageComponent extends Component {
  render() {
    return (
        <div style={{paddingTop:'2%',paddingBotton:'5%',borderRadius:'25px',width:'100%', overflow:'hidden'}}>
            <ResponsiveAppBar /> 
            <CardComponent />
            <MasonryImageList />
            <StickyFooter />
        </div>
        );
    }
}
export default MainPageComponent;


