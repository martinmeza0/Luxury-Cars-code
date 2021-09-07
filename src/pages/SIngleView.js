import React from 'react';
import { useParams } from 'react-router-dom';
import Menu from '../components/Menu'
import Slider from '../components/Slider';
import Tagline from '../components/Tagline';
import styled from 'styled-components'
import Footer from '../components/Footer'

//img
const SingleView = (props) => {
    const {img, title, price, description, img2, img3} = props;

    return (
        <>
            <Menu></Menu>
            <Tagline></Tagline>
            <Main>
                <Tittle>{title}</Tittle>
                <Container>
                    <div> 
                        <Slider 
                            img={img}
                            img2={img2}
                            img3={img3}/>
                    </div>
                    <Information>
                        <p>{description}</p>
                        <Button>Buy for {price}</Button>
                    </Information>
                </Container>
            </Main>
            <Footer></Footer>

        </>
    )
}

//styles
const Main = styled.main`
    display: block;
    overflow: hidden;
    
`
export {Main};

const Container = styled.div`
    display: flex;
    & > div {
        width: 60%;
    }
`

const Tittle = styled.h1`
    text-align: center;
    margin-bottom: 10px;
    color: #bb1c1c;
`
const Information = styled.div`
    width: 40%;
    padding: 10px 10px 10px 15px;
    & > p {
        font-size: 1.1rem;
    }

    & > Button {
        margin-top: 15px;
        width: 100%;
    }
`
const Button = styled.button`
    display: inline-block;
    padding: 5px 20px;
    font-size: 1.1rem;
    border: none;
    background-color: #bb1c1c;
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    &:hover {
        background-color: #FF3B3B;
        border-radius: 3px;
        transition: all .3s ease-in-out;
    }
`

export default SingleView
