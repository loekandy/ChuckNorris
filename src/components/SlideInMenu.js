import React, { Component } from 'react';
import Navigation from '../components/Navigation';

class SlideInMenu extends Component {
    constructor(props) {
        super(props)
            this.state = {
                SlideMenuVisable: false
            }   
        }

        SlideMenuToggle = () => {
            this.setState(prevState => ({
                SlideMenuVisable: !prevState.SlideMenuVisable
            }));
    }

  render() {

    let expanded;
    if(this.state.SlideMenuVisable === true)
    {
        expanded = "-expanded";
    }
    else {
        expanded = " ";
    }

      return <div>
        <button  onClick={this.SlideMenuToggle}>Toggle</button>
        <div className={"slidemenu" + expanded}>
            <Navigation />
        </div>
      </div>;
    }
}

export default SlideInMenu;
