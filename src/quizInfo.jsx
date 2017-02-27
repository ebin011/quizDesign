import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';

const styles={

	buttonStyle:{
		marginLeft:'10%'
	}
}

class QuizInfo extends Component {

  render() {

    return(

            <div>
            <Paper>
                <h2 style={{background:'#000000',textAlign:'center',color:'#FFFFFF'}}>Question Name</h2>
                <div style={{marginLeft:'20%'}}>
                <h4>Creater:</h4>
                <h4>Created Date:</h4>
                <h4>Total Participants:</h4>
                </div>
                <Divider style={{marginTop:'2%'}}/>
                <div style={{textAlign:'center'}}>
                <RaisedButton label="Edit" style={styles.buttonStyle} buttonStyle={{background:'#7A7A75'}}  labelStyle={{color:'#FFFFFF',fontWeight:'bold'}}> </RaisedButton>
                <RaisedButton label="Add" style={styles.buttonStyle} buttonStyle={{background:'#0C9205'}} labelStyle={{color:'#FFFFFF',fontWeight:'bold'}} > </RaisedButton>
                <RaisedButton label="Publish" style={styles.buttonStyle} buttonStyle={{background:'#089E9C'}} labelStyle={{color:'#FFFFFF',fontWeight:'bold'}} > </RaisedButton>
                </div>
            </Paper>
            </div>

    	);

    }

  }
  export default QuizInfo