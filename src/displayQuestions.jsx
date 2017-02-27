import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Chip from 'material-ui/Chip';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { Grid,Col,Row} from 'react-flexbox-grid';
import Dialog from 'material-ui/Dialog';


const welcomeStyle={
background:'#2F3A30',
textAlign:'center',
marginTop:0,
marginLeft:0,
marginRight:0,
marginBottom:0,
height:"20%"
}

const questionStyle={
background:'#FFFFFF',
marginTop:0,
marginBottom:0,
marginLeft:0,
marginRight:0,
height:'160%'

}

const thanksStyle={
background:'#2F3A30',
textAlign:'center',
marginTop:0,
marginBottom:0,
marginLeft:0,
marginRight:0,
height:"20%"

}

const style = {
textAlign: 'center',
height:'90%'

};

const chipStyle={

      display: 'flex',
    flexWrap: 'wrap',
};



class DispalyQuestions  extends Component {


 state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

 render() {
const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
     
    ];



   return(
     <Paper  style={style}>

     <Dialog
          contentStyle={{width:'100%',maxWidth:'none'}}
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >

<div style={{height:'100%'}}>

   <h2 style={{fontWeight:'bold',textAlign:'center'}}>Question Look like this....</h2>
  

   <Card style={welcomeStyle}>
      <h3 style={{marginBottom:'3%',color:'#E1E1E1',fontSize:'150%'}}>Header</h3>
     
   </Card>
   
     <Card style={questionStyle}> 
      <h3 style={{marginTop:'1%',marginBottom:0,color:'#000000',textAlign:'left',marginLeft:'2%'}}>[ Questions comes Here ]</h3>
      
       <Row center= 'xs'  style={{marginLeft:'3%'}}>
         <Col xs={6}>
       <Chip  style={{ margin:'2%' }} labelStyle={{color:'#000000',fontWeight:'bold'}}>
          <Avatar size={32}>1</Avatar>
          Option 1
        </Chip>
        </Col>
        <Col xs={6}>
         <Chip   backgroundColor={'#77CC4F'} style={{ margin: '2%'}} labelStyle={{color:'#000000',fontWeight:'bold'}}>
          <Avatar backgroundColor={'#226901'} size={32}>2</Avatar>
          Option 2
        </Chip>
        </Col>
         </Row>
         <Row center = 'xs'  style={{marginLeft:'3%'}}>
         <Col xs={6}>
         <Chip  style={{ margin:'2%'}} labelStyle={{color:'#000000',fontWeight:'bold'}}>
          <Avatar size={32}>3</Avatar>
          Option 3
        </Chip>
        </Col>
        <Col xs={6}>
         <Chip  style={{ margin: '2%'}} labelStyle={{color:'#000000',fontWeight:'bold'}}>
          <Avatar size={32}>4</Avatar>
          Option 4
        </Chip>
        </Col>
        </Row>
   
     </Card>
     <Divider/>
   <Card style={thanksStyle}>
      <h3 style={{marginTop:0,marginBottom:'3%',color:'#E1E1E1'}}>Footer </h3>
      <Divider/>
  
   </Card>
   </div>
   </Dialog>
   <RaisedButton label="Upload" onTouchTap={this.handleOpen} />
       
   </Paper>
   






  );

   }
}

export default DispalyQuestions;
