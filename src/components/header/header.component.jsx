import React from 'react';
import { Link } from 'react-router-dom';

import {ReactComponent as Logo } from '../../assets/logo.svg';
import MenuItem from '../menu-item/menu-item.component';

class Header extends React.Component{

    constructor(){
        super();

        this.state = {
            toggleMenu: false,
            menuItems: [
                {
                    "id": 1,
                    "name": "Portfolio",
                    "pathUrl": "/portfolio"
                },
                {
                    "id": 2,
                    "name": "Process",
                    "pathUrl": "/process"
                },
                {
                    "id": 3,
                    "name": "Journal",
                    "pathUrl": "/journal"
                },
                {
                    "id": 4,
                    "name": "Contact Info",
                    "pathUrl": "/contact-info"
                }
            ]
        }
    }

    handleToggle = () =>{

        this.setState(prevState =>({ 
            toggleMenu: !prevState.toggleMenu}
        ));    

    }

    render(){
         const { toggleMenu, menuItems } = this.state;
        return(
            <div>
            <header>
                <Link to="/" className="logo-container">
                    <Logo className="logo"></Logo>
                </Link>
                <div className="header-link">
                    <div 
                        className={
                        `${toggleMenu 
                            ? 'open' 
                            : ''
                        } 
                        header-hamburguer`
                        } 
                        onClick={this.handleToggle}
                    >
                        <span className="header-hamburguer__icon"></span>
                    </div>
                    <ul 
                        className="header-nav" 
                        style=
                        {{
                            right: `${
                                toggleMenu
                                ? '0px'
                                : '-250px'
                            }`
                        }}
                    >
                    {
                        menuItems
                        .map((menuItem) => 
                            <MenuItem 
                                key={menuItem.id} 
                                item={menuItem} 
                                handleToggle={this.handleToggle} 
                            />
                        )
                    }
                    </ul>
                </div>
                
            </header>
        </div>
        )
    }
    
}

export default Header;