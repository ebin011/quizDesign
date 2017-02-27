import React,{ Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

import Upload from 'material-ui/svg-icons/file/file-upload';
import WriteNew  from 'material-ui/svg-icons/action/note-add';
import FileIcon from 'material-ui/svg-icons/editor/insert-drive-file';

const styles = {

	tabHead:{
		background:'#5D605C',
		fontWeight:'bold',
		fontSize:15

	},	

	headline: {
		fontSize: 24,
		paddingTop: 16,
		marginBottom: 12,

	},

	button:{

		background:'C4BBBB',
	},

	buttonLabel:{

		fontWeight:'bold',
		color:'#FFFFFF'
	},

	fileUpload:{

		cursor: 'pointer',
		position: 'absolute',
		top: 0,
		bottom: 0,
		right: 0,
		left: 0,
		width: '100%',
		opacity: 0,

	},
};

class AddQuestion extends  Component{


	constructor(props) {
		super(props);
		this.state = {
			value: 'a',
		};
	}

	handleChange = (value) => {
		this.setState({
			value: value,
		});
	};

	render(){

		return(

			<Paper>
			<Tabs
			value={this.state.value}
			onChange={this.handleChange}
			>
			<Tab icon={<Upload />} label="Upload Questions" value="a"  style={styles. tabHead}>
			<div>

			<div style={{marginTop:'2%',marginBottom:'3%',textAlign:'center'}}>
			<h2 style={styles.headline}>Upload Your Excel File</h2>
			<p>
			Choose file from your system
			</p>
			<RaisedButton
			icon={<FileIcon/>}
			label="Choose Excel file....."
			
			style={styles.button}
			buttonStyle={{background:'#207D0A'}}
			labelStyle={styles.buttonLabel}
			containerElement="label"
			>
			<input type="file"  style={styles.fileUpload} />
			</RaisedButton>	
			</div>
			
			</div>
			</Tab>
			<Tab icon={<WriteNew/>} label="Manuel Creation" value="b" style={styles. tabHead}>
			<div>
			<h2 style={styles.headline}>Manuel Creation</h2>
			<p>
			Coming Soon.......
			</p>
			</div>
			</Tab>
			</Tabs>


			</Paper>

			);

	}
}

export default AddQuestion;