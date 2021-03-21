import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {useAuth} from "../context/authContext";

const NavContainer = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
`;

const NavItem = styled.li`
  float: left;
  
  a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  a:hover {
    background-color: #111;
  }
  
`;



const Navbar = () => {

    const { setAuthTokens } = useAuth();

    const logOut = () => {
        setAuthTokens("")
    }
    return (
        <NavContainer>
                    <NavItem>
                        <Link to="/home">Home</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/about">About</Link>
                    </NavItem>
            <NavItem style={{float: "right"}}>
                <Link to="/" onClick={logOut}>Log out</Link>
            </NavItem>
        </NavContainer>
    )
}

export default Navbar;