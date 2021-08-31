import React from 'react';
import { useParams } from 'react-router-dom';
import Menu from '../components/Menu'
import Slider from '../components/Slider';
import Tagline from '../components/Tagline';
import styled from 'styled-components'

//img
const SingleView = () => {
    const {carName} = useParams()
    return (
        <>
            <Menu></Menu>
            <Tagline></Tagline>
            <Main>
                <Tittle>Auto</Tittle>
                <Container>
                    <div> 
                        <Slider></Slider>
                    </div>
                    <Information>
                        <p>Providing an excellent ride in an upscale interior that offers room for up to four adult passengers, the BMW M3 is a great example of a cool sports car that can transport your friends and family. Model years 2017 and 2018 come in one trim and are powered by a 425-hp 3.0L turbocharged inline-six engine that can be paired with a six-speed manual or seven-speed dual-clutch transmission.</p>
                        <Button>Buy for $50.000</Button>
                    </Information>
                </Container>
            </Main>

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
