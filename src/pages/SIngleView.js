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
                <h1>Auto</h1>
                <Slider></Slider>
            </Main>
        </>
    )
}

//styles
const Main = styled.main`
    display: block;
    overflow: hidden;
`

export default SingleView
