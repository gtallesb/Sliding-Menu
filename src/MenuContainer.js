import React, { Component } from 'react';
import MenuButton from './MenuButton';
import Menu from './Menu.js';


class MenuContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible : false
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
  }

  handleMouseDown(e) {
    this.toggleMenu();

    e.stopPropagation();
  }

  toggleMenu() {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    console.log('Rendering: MenuContainer');

    return (
      <div>
       <Menu stateVisibility={this.state.visible} handleMouseDown={this.handleMouseDown}/>
       <MenuButton handleMouseDown={this.handleMouseDown}/>
       <div>
        <p>Can you spot the item that doesn't belong?</p>
        <ul>
         <li>Lorem</li>
         <li>Ipsum</li>
         <li>Dolor</li>
         <li>Sit</li>
         <li>Bumblebees</li>
         <li>Aenean</li>
         <li>Consectetur</li>
        </ul>
       </div>
      </div>

    );
  }
}

export default MenuContainer;
