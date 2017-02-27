import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import ReactSpinner from 'react-spinjs';

var Spinner = require('react-spinkit');

const style = {
  height: '90%',
  width: '90%',
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};
const progessStyle={
	height:'20%',
	width:'20%',
	textAlign:'center',
	marginLeft:'40%',
	marginTop:'20%',
	marginBottom:'15%'

};

const configObject = {
      // a few sensible defaults
      width:22,
      radius: 18,
      length: 7,
      color:'#025D10'
      // color should not overwrite config
      
    };

class ProgressBar extends Component {
  render() {
    return(
	<div style={{textAlign:'center'}}>
    	<Paper style={style} zDepth={3} >
    	<div style={progessStyle}>
    		<h1>Please Wait</h1>
    		<Divider/>
    			<div style={{width:'80%'}}>
      			<ReactSpinner config={configObject} />
      			</div>
    	</div>
    	</Paper>
    </div>	

    	);
}
}
export default ProgressBar;