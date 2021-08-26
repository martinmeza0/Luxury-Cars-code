import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';
  
const Menu = () => {
    return (
        <>
            <header>
                <Nav>
                    <Ul>
                        <Li>
                            <NavLink to="/">Home</NavLink>
                        </Li>
                        <Li>
                            <NavLink to="/about">About</NavLink>
                        </Li>
                        <Li>
                            <NavLink to="/users">User</NavLink>
                        </Li>
                    </Ul>
                </Nav>
            </header>
        </>
    )
}

//Styles
const Nav = styled.nav`
background-color: #191C24;
`
const Ul = styled.ul`
text-align: right;
margin-right: 10vw
`

const Li = styled.li`
    display: inline-block;
    padding: 10px 20px;
`

const NavLink = styled(Link)` 
    line-height: 2rem;
    font-size: 1.2rem;
    text-decoration: none;
    color: #fff;
`
export default Menu
