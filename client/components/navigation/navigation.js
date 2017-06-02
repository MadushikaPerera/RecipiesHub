import React,{Component} from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import AutoComplete from 'material-ui/AutoComplete';
import { Link } from 'react-router-dom';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {grey50} from 'material-ui/styles/colors';

const styles = {
  title: {
    cursor: 'pointer',
    color: grey50,
    fontWeight: 'bold',
    fontSize: 25,
    marginRight: 100,
    marginLeft: 10,
    paddingTop:10,
  },
};


class Navigation extends Component{

  constructor(props,contex){
     super(props,contex);
       this.state = {
         dataSource: [],
       }
  }

  render(){
     return(
       <div>
       <AppBar
         iconStyleLeft={{marginTop:10}}
         iconElementLeft={
           <div className="column">
             <span style={styles.title}>RecipesHub</span>
             <AutoComplete
                hintText="Search"
                dataSource={this.state.dataSource}
                filter={AutoComplete.caseInsensitiveFilter}
                textFieldStyle={{width: 500}}
             />
           </div>
         }
         iconStyleRight={{marginTop:0}}
         iconElementRight={
           <div className="column" style={{marginTop:0}}>
             <Link to="/home"><FlatButton labelStyle={{color: grey50,fontWeight: 'bold',fontSize: 16}} label="Home"/></Link>
             <Link to="/account"><FlatButton labelStyle={{color: grey50,fontWeight: 'bold',fontSize: 16}} label="My Profile"/></Link>
             <IconMenu
               iconStyle={{paddingTop:5}}
               iconButtonElement={
                 <IconButton><MoreVertIcon color='white'/></IconButton>
               }
               targetOrigin={{horizontal: 'right', vertical: 'top'}}
               anchorOrigin={{horizontal: 'right', vertical: 'top'}}
             >
               <Link to="/login"><MenuItem primaryText="Logout" onTouchTap={this.logout}/></Link>
               <Link to=""><MenuItem primaryText="Settings" onTouchTap={this.setting}/></Link>
               <Link to=""><MenuItem primaryText="Help" onTouchTap={this.help}/></Link>
             </IconMenu>
          </div>
          }
        />
         {this.props.children}
       </div>
     );
   }
}

export default Navigation;
