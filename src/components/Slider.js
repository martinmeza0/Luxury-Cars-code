import React from 'react';
import img from '../images/StingerGTAVatras.jpg';
import {ReactComponent as ArrowRight} from '../images/iconmonstr-arrow-25.svg';
import {ReactComponent as ArrowLeft} from '../images/iconmonstr-arrow-64.svg';
import styled from 'styled-components';

const Slider = () => {
    return (
        <Container>
            <SliderContainer>
                <Image>
                    <img src={img}/>
                </Image>
                <Image>
                    <img src={img}/>
                </Image>
                <Image>
                    <img src={img}/>
                </Image>
            </SliderContainer>
            <div>
                <button>
                    <ArrowLeft/>
                </button>
                <button>
                    <ArrowRight/>
                </button>
            </div>
        </Container>

    )
}

//Styles
const Container = styled.section``

const SliderContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    overflow: hidden;
`
const Image = styled.div`
    min-width: 300px;
`
export default Slider
