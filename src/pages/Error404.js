import React from 'react';
import styled from 'styled-components';
import Menu from '../components/Menu';
import {Link} from "react-router-dom";
import {ReactComponent as NotFoundSVG} from '../assets/404.svg';
import Footer from '../components/Footer';
import {SingleContainer} from '../components/Styles';
const Error404 = () => {

    return (
        <>  
            <Menu></Menu>
            <Main>
                <Tittle> Website under maintenance </Tittle>
                <NotFoundSVG/>
                <p>
                    This page is currently in maintenance, we will be back soon...
                </p> 
                <Link to="/">Go to Home</Link>
            </Main>
            <Footer></Footer>
        </>
    )
}

//style
const Main = styled(SingleContainer)`
    margin-top: 10vh;
    position: static;
    display: block;
    background-color: #191C24;
    text-align: center;
    color: #fff;
    & > svg {
        width: 90%;
        margin: 50px 0;
        @media (max-width: 768px) {
            margin: 0;
            width: 100%;
            height: 60vh;
        }
        @media (max-width: 425px) {
            height: 30vh;
        }
    }

    & > p {
        margin-bottom: 10px;
    }

    & > a {
        text-decoration: none;
        font-size: 1.5rem;
        color: #A81010;
        border-bottom: 1px solid #A81010;
    }

    @media (max-width: 768px) {
        width: 80vw;
    }
`

const Tittle = styled.h2` 
    margin-top: 20px;
    text-transform: uppercase;
    font-size: 2rem;
`

export default Error404
