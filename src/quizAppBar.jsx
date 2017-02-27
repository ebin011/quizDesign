import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import {IndexLink,Link} from 'react-router';
import {List, ListItem} from 'material-ui/List';

import DashboardIcon from 'material-ui/svg-icons/action/dashboard';
import Logout from 'material-ui/svg-icons/action/highlight-off';
import Create from 'material-ui/svg-icons/content/create';
import DeployIcon from 'material-ui/svg-icons/file/file-upload';
import DeployedAppIcon from 'material-ui/svg-icons/action/view-module';
import Divider from 'material-ui/Divider';





class QuizAppBar extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }

static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired
    };
  }


   

  

  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false});

  render() {
    return(

      <div>
        <AppBar
        title="Quiz Time"
        style={{background:'#000000'}}
        onLeftIconButtonTouchTap={() => { this.setState({open: true}); }}/>

        <Drawer open={this.state.drawerOpen}
          docked={false}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})} >
          <div >
            <div style={{marginTop:'50px',textAlign: 'center'}}>
              <Avatar  size={150} />
              <h5>User Name</h5>
            </div>
            <Divider/>
              <List >
                <IndexLink to="/app/quizInfo" activeClassName="active" style={{textDecoration:'none'}}> <MenuItem primaryText="View Quiz" leftIcon={<DashboardIcon />} onTouchTap={this.handleClose}  /> </IndexLink>
                <Divider/>
                <IndexLink to="/app/addQuestion" activeClassName="active" style={{textDecoration:'none'}}> <MenuItem primaryText="Create Quiz" style={{marginTop:'1%'}} leftIcon={<Create />} onTouchTap={this.handleClose} /> </IndexLink>
                <Divider/>
                <Link to="/"><MenuItem primaryText="Logout"  style={{marginTop:'1%'}} leftIcon={<Logout />} onTouchTap={this.handleClose} /></Link>
                <Divider/>
              </List>  

          </div>
        </Drawer>
      </div>

      );

      }

}

export default QuizAppBar;
