import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import { Grid,Col,Row} from 'react-flexbox-grid';
import MenuItem from 'material-ui/MenuItem';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';  
import {Rectangle, Circle, Ellipse, Line, Polyline, CornerBox, Triangle} from 'react-shapes'; 

import Background from '../images/Background.jpg';


 const cardheadstyle={
 background:'#5D605C',
 textAlign:'center',
 chip: {
    marginLeft:'80%',
  },
 

}
const title={
  fontWeight: 'bold',
  fontSize:25
}

const dialogStyle={

}

 
const buttonStyle={
  margin:'5%',
  fontWeight: 'bold',
  width:'70%',
  color:'#DADADA'
}

const buttonLabelStyle={
  fontWeight: 'bold',
  fontSize:10,
  marginTop:'0px',
  marginBottom:'0px'
}


const queStyle = {
 textAlign: 'Left',
 display: 'inline-block',
 marginTop:'15%',
 marginBottom:'50%',
 width:'100%'
}




class QuizHome extends Component {

 


  render() {




    return(
<div style={{ backgroundImage: `url(${Background})`,backgroundRepeat:'no-repeat',backgroundAttachment:'fixed',backgroundPosition:'center',width:'100%',height:'100%'}}>
<Grid >
<Row>
    <Col xs={8}>
    <Paper  style={queStyle} zDepth={3}>
    <Card >
         
         <CardHeader title="Question: Number" style={cardheadstyle} titleStyle={title} titleColor='white' subtitleColor='white'>
            <div style={{textAlign:'Right',}}>
            <Chip
              
              style={cardheadstyle.chip}
             >
             <h3 style={{textWeight:'bold',textAlign:'Left',marginTop:'0px',marginBottom:'0px'}}>Time Left</h3>
             <h2 style={{textAlign:'center',marginTop:'0px',marginBottom:'0px',color:'#AB0101'}}>00</h2>
            </Chip>
            </div>
         </CardHeader>
          
          <h3 style={{marginLeft:'2%'}}>Your Question Here</h3>
          <Divider />
        <Row center= 'xs'  style={{marginTop:'0px',marginBottom:'0px'}}>
         <Col xs={6}>

        <label>
      <RaisedButton label="Option 1" 
      backgroundColor="#DADADA"
      labelStyle={{fontWeight: 'bold'}}
       style={buttonStyle}/>
      
      </label>
      </Col>
      <Col xs={6}>
      <label>
     <RaisedButton label="Option 2"
      backgroundColor="#DADADA"
      labelStyle={{fontWeight: 'bold'}}
      style={buttonStyle} />
      </label>

      </Col>
     
      </Row>
      <Row center = 'xs'  style={{marginTop:'0px',marginBottom:'0px'}}>
      <Col xs={6}>
      <label>
      <RaisedButton label="Option 3" 
      backgroundColor="#DADADA"
      labelStyle={{fontWeight: 'bold'}}
      style={buttonStyle}  />
      </label>
      </Col>
      <Col xs={6}>
      <label>
     <RaisedButton label="Option 4"
     backgroundColor="#DADADA"
     labelStyle={{fontWeight: 'bold'}}
      style={buttonStyle} />
      </label>
      </Col>
      </Row>
    <Divider />
       
      
     </Card>

    </Paper >
    </Col>
    <Col xs={4}>
    <Paper style={{width:'100%',marginTop:'30.5%'}} zDepth={3} >
     <Table style={{width:'100%'}}>
    <TableHeader displaySelectAll={false} adjustForCheckbox={false} >
    <TableRow style={{background:'#5D605C'}}>
              <TableHeaderColumn colSpan="3"  style={{textAlign: 'center'}}>
                <h2 style={{color:'#FFFFFF'}}>Leader Board</h2>
              </TableHeaderColumn>
   </TableRow>
   <TableRow >
              <TableHeaderColumn ><h3 style={{color:'#034346'}}>Sl NO</h3></TableHeaderColumn>
              <TableHeaderColumn ><h3 style={{color:'#034346'}}>Name</h3></TableHeaderColumn>
              <TableHeaderColumn ><h3 style={{color:'#034346'}}>Points</h3></TableHeaderColumn>
   </TableRow>
   </TableHeader>
   <TableBody displayRowCheckbox={false}>
     
         <TableRow> 
         <TableRowColumn>1</TableRowColumn> 
         <TableRowColumn>Employee </TableRowColumn>
         <TableRowColumn>10</TableRowColumn>
         </TableRow>
         
    </TableBody>
     </Table>
    </Paper>
</Col>
</Row>
</Grid>
</div>

   );

    }
}

export default QuizHome;
