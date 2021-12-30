import { Component } from 'react';
import ClientService from '../services/ClientService';
import ResponsiveAppBar from './HeaderComponent';
import * as React from 'react';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

class CreateClientComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            // id: this.props.match.params.id,
            phone: '',
            email: '',
            name: ' ',
            sqFeet: ' ',
            objects: ' ',
            stories: ' ',
            toClean: ' ',
            notes: ' '
        }
        this.changePhoneHandler = this.changePhoneHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeNotesHandler = this.changeNotesHandler.bind(this);
        this.changeSqFeetHandler = this.changeSqFeetHandler.bind(this);
        this.changeStoriesHandler = this.changeStoriesHandler.bind(this);
        this.changeToCleanHandler = this.changeToCleanHandler.bind(this);
        this.changeObjectsHandler = this.changeObjectsHandler.bind(this);
    }
    componentDidMount(){ // step 3 (TRIGGER!)
    }
    saveOrUpdateClient = (e) => {
        e.preventDefault();
        let client = {phone: this.state.phone, email: this.state.email, name: this.state.name, toClean: this.state.toClean,
        sqFeet: this.state.sqFeet, stories: this.state.stories, objects: this.state.objects, notes: this.state.notes};
        console.log('client => ' + JSON.stringify(client));

        ClientService.createClient(client).then( res => {
            this.props.history.push('/');
        }
      );
    }
    cancel(){
            this.props.history.push('/');
    }
    getTitle(){
           // if(this.state.id === '_add'){
       return <h3 className="text-center"> </h3>
           // }else{
          //    return <h3 className="text-center">Update Clients/Quotes</h3> Kind of useless function for this program
         //  }
    }
    ActionAlerts() {
        return (
          <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert onClose={() => {}}>This is a success alert — check it out!</Alert>
            <Alert
              action={
                <Button color="inherit" size="small">
                  UNDO
                </Button>
              }
            >
              This is a success alert — check it out!
            </Alert>
          </Stack>
        );
      }
    changePhoneHandler= (event) => {
        this.setState({phone: event.target.value});
    }
    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }
    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }
    changeNotesHandler= (event) => {
        this.setState({notes: event.target.value});
    }
    changeStoriesHandler= (event) => {
       this.setState({stories: event.target.value});
    }
    changeSqFeetHandler= (event) => {
       this.setState({sqFeet: event.target.value});
    }
    changeToCleanHandler= (event) => {
       this.setState({toClean: event.target.value});
    }
    changeObjectsHandler= (event) => {
       this.setState({objects: event.target.value});
    }


   
    render() {
        return (
        
            <div style={{overflow:'hidden',minHeight:'75rem'}}>
                
                <div>
                    
                    <ResponsiveAppBar /> 
                       <div className="row" style={{paddingLeft:'10%', paddingRight:'10%', paddingBottom:'0', paddingTop:'5%'}}>
                            <div className = "card col-md-6 offset-sm-3 offset-sm-3" style={{borderColor:'#385F9B',overflow:'hidden',fontSize:'120%',fontFamily:'Lexend Deca',fontWeight:'bold',color:"#385F9B",backgroundColor:'#FAF8F6', borderRadius:'2rem' ,borderWidth:"5%"}}>
                                {
                                    this.getTitle()
                                   
                                }



                                <div className = "card-body" >
                                    <form >
                                        <div className = "form-group">
                                            <label> <span style={{color:"red"}}>*</span> Name: </label>
                                            <input  placeholder="First Last" name="name" className="form-control"
                                             value={this.state.name} onChange={this.changeNameHandler} style={{borderColor:'#385F9B',borderWidth:"1px"}}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Phone: </label>
                                            <input placeholder=" " name="phone" className="form-control"
                                             value={this.state.phone} onChange={this.changePhoneHandler}style={{borderColor:'#385F9B',borderWidth:"1px"}}/>
                                        </div>

                                        <div className = "form-group">
                                            <label > <span style={{color:"red"}}>*</span> Email: </label>
                                            <input placeholder="@blank.com" name="email" className="form-control" 
                                             value={this.state.email} onChange={this.changeEmailHandler}style={{borderColor:'#385F9B',borderWidth:"1px"}}/>
                                        </div>

                                        <div className = "form-group">
                                            <label > <span style={{color:"red"}}>*</span> Service: </label>
                                            <input placeholder="'roof', 'driveway', etc." name="toClean" className="form-control"
                                             value={this.state.toClean} onChange={this.changeToCleanHandler} style={{borderColor:'#385F9B',borderWidth:"1px"}}/>
                                        </div>

                                        <div className = "form-group">
                                            <label > <span style={{color:"red"}}>*</span> Approximate sq. footage of service? ("0" if N/A) </label>
                                            <input placeholder="i.e. '2000'" name="sqFeet" className="form-control"
                                             value={this.state.sqFeet} onChange={this.changeSqFeetHandler}style={{borderColor:'#385F9B',borderWidth:"1px"}}/>
                                        </div>

                                        <div className = "form-group">
                                            <label >How many stories is the structure?</label>
                                            <input placeholder="i.e. '6' or '0'" name="stories" className="form-control"
                                            value={this.state.stories} onChange={this.changeStoriesHandler}style={{borderColor:'#385F9B',borderWidth:"1px"}}/>
                                        </div>

                                        <div className = "form-group">
                                            <label ><span style={{color:"red"}}>*</span> How many objects are to be serviced? ("0" if N/A) </label>
                                            <input placeholder="i.e. amount of 'trucks ,tractors, trailers'" name="objects" className="form-control"
                                            value={this.state.objects} onChange={this.changeObjectsHandler}style={{borderColor:'#385F9B',borderWidth:"1px"}}/>
                                        </div>

                                        <div className = "form-group">
                                            <label >General notes: </label>
                                            <input placeholder=" " name="notes" className="form-control"
                                             value={this.state.notes} onChange={this.changeNotesHandler}style={{borderColor:'#385F9B',borderWidth:"1px"}}/>
                                        </div>
                                        
                                        <button style={{borderRadius:'10%',marginTop:'1rem',backgroundColor:'#385F9B', color:'#FAF8F6',borderWidth:'1px'}} onClick={this.saveOrUpdateClient}>Submit</button>
                                        <button style={{borderRadius:'10%',backgroundColor:'none', color:'red',borderColor:'red',borderWidth:'1px',marginLeft:'10px'}} onClick={this.cancel.bind(this)}>Cancel</button>

                                    </form>
                                </div>
                                
                            </div>
                          </div>
                       
                      </div>
                     <br></br>
                  <Alert variant="warning" style={{paddingTop:'0',display:'flex',alignItems:'center',justifyContent:'center',borderRadius:"1rem"}}  >
                                  <h5 style={{fontFamily:"sans-serif",fontStyle: "italic" ,textDecoration: "underline"}}>This quote is completely FREE!</h5>

                                   <p style={{fontFamily:"sans-serif"}}> Although we do our best to honor the given quote, the final price is subject to change upon in-person inspection.</p>

                </Alert>
                
          </div>
        );
    }
}
export default CreateClientComponent;