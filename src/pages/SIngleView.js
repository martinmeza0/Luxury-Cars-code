import React from 'react';
import { useParams } from 'react-router-dom';
import Menu from '../components/Menu'
import Slider from '../components/Slider';
import Tagline from '../components/Tagline';
//img
const SIngleView = () => {
    const {carName} = useParams()
    return (
        <>
            <Menu></Menu>
            <Tagline></Tagline>
            <main>
                <h1>Auto</h1>
                <Slider></Slider>
            </main>
        </>
    )
}



export default SIngleView
