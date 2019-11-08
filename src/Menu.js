import React, { Component } from 'react';
import './Menu.css';


class Menu extends Component {
  render() {
    console.log('Rendering: Menu');

    var visibility = 'hidden';

    if(this.props.stateVisibility)
     visibility= 'show';

    return(
      <div id='menuFlyOut' onMouseDown={this.props.handleMouseDown} className={visibility}>
       <ul>
        <p><a href='#'>Home</a></p>
        <p><a href='#'>About</a></p>
        <p><a href='#'>Contact</a></p>
        <p><a href='#'>Search</a></p>
       </ul>
      </div>

    );
  }
}


export default Menu;
