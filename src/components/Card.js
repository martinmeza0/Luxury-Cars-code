import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';
  
const Card = (props) => {
    const {img, tittle, price} = props;

    return (
        <>
            <CardContainer>
                <Tittle>{tittle}</Tittle>
                <Img src={img} alt="audi"/>
                <TextContainer>
                    <Button to="/:auto" >View</Button>
                    <p class="price">{price}</p>
                </TextContainer>
            </CardContainer>        
        </>
    )
}

//Styles
const CardContainer = styled.article`
    background-color: #191C24;
    color: #fff;
`
const Tittle = styled.h3`padding: 10px;`

const Img = styled.img`width: 100%;`

const TextContainer = styled.div`
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Button = styled(Link)`
    display: inline-block;
    padding: 5px 20px;
    font-size: 1.1rem;
    border-radius: 5px;
    background-color: #bb1c1c;
    text-decoration: none;
    color: #fff;
`
export default Card