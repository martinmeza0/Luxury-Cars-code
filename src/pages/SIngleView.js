import React from 'react';
import Menu from '../components/Menu';
import Slider from '../components/Slider';
import Tagline from '../components/Tagline';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Colors from '../components/Colors';
import {SingleContainer} from '../components/Styles'
//img
const SingleView = () => {

    return (
        <>
            <Menu></Menu>
            <Tagline></Tagline>
            <SingleContainer>
                <Tittle>BMW M3</Tittle>
                <Container>
                    <div> 
                        <Slider 
                            img="/image/BMW M3/1.webp"
                            img2="/image/BMW M3/2.webp"
                            img3="/image/BMW M3/3.webp"
                        />
                    <Colors></Colors>
                    </div>
                    <Information>
                        <p>Providing an excellent ride in an upscale interior that offers room for up to four adult passengers, the BMW M3 is a great example of a cool sports car that can transport your friends and family. Model years 2017 and 2018 come in one trim and are powered by a 425-hp 3.0L turbocharged inline-six engine that can be paired with a six-speed manual or seven-speed dual-clutch</p>
                        <Button>Buy for 69,900 US$</Button>
                    </Information>
                </Container>
            </SingleContainer>
            <Footer></Footer>

        </>
    )
}

//styles
const Container = styled.div`
    display: flex;
    & > div {
        width: 60%;
        @media (max-width: 768px) {
            width: 80%;
        }
        
        @media (max-width: 426px) {
            width: 100%;
            margin: 10px 0;
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
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
