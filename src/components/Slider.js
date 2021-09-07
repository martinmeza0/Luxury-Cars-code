import React, {useRef} from 'react';
// import img1 from '../images/BMW M3/1.webp';
// import img2 from '../images/BMW M3/2.webp';
// import img3 from '../images/BMW M3/3.webp';
import {ReactComponent as ArrowRight} from '../images/iconmonstr-arrow-25.svg';
import {ReactComponent as ArrowLeft} from '../images/iconmonstr-arrow-64.svg';
import styled from 'styled-components';

const Slider = (props) => {
    const {img, img2, img3} = props;
    const sliderShow = useRef(null);

    const moveToLeft = () => {
        // Check if the slider have childrens
        if(sliderShow.current.children.length > 0) {
            //Obtain the last element of the slider
            const index = sliderShow.current.children.length - 1;
            const LastElement = sliderShow.current.children[index];
            
            //send the last element to the beginning
            sliderShow.current.insertBefore(LastElement, sliderShow.current.firstChild);
            
            sliderShow.current.style.transition = 'none';

            const imgSize = sliderShow.current.children[0].offsetWidth;

            //move the Slide
            sliderShow.current.style.transform = `translateX(-${imgSize}px)`;

            setTimeout(() =>{
                sliderShow.current.style.transition = `300ms ease-out all`;
                sliderShow.current.style.transform = `translateX(0)`;
            }, 30);
        }
    }
    const moveToRight = () => {
        // Check if the slider have childrens
        if(sliderShow.current.children.length > 0) {
            const firstElement = sliderShow.current.children[0];

            sliderShow.current.style.transition = `300ms ease-out all`;

            const imgSize = sliderShow.current.children[0].offsetWidth;

            //move the Slide
            sliderShow.current.style.transform = `translateX(-${imgSize}px)`;

            const resetTransition = () => {
                sliderShow.current.style.transition = 'none';
                sliderShow.current.style.transform = `translateX(0)`;
            
                //send the first element to the end
                sliderShow.current.appendChild(firstElement);

                sliderShow.current.removeEventListener('transitionend', resetTransition);
            }

            sliderShow.current.addEventListener('transitionend', resetTransition);
        };
    }
    

    return (
        <Container>
            <SliderContainer ref={sliderShow}>
                <Image>
                    <Img src={img}/>
                </Image>
                <Image>
                    <Img src={img2}/>
                </Image>
                <Image>
                    <Img src={img3}/>
                </Image>
            </SliderContainer>
            <ButtonContainer>
                <Button onClick={moveToLeft}>
                    <ArrowLeft/>
                </Button>
                <Button right onClick={moveToRight}>
                    <ArrowRight/>
                </Button>
            </ButtonContainer>
        </Container>

    )
}

//Styles
const Container = styled.section`
    position: relative;
    overflow: hidden;
`

const SliderContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
`
const Image = styled.div`
    min-width: 100%
    `
    const Img = styled.img`
    width: 100%;
`
const ButtonContainer = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;

`
const Button = styled.button`
    cursor: pointer;
    background: none;
    border: none;
    outline: none;
    width: 50px;
    height: 100%;
    position: absolute;
    transition: .3s ease all;

    &:hover {
        background: rgba(168, 16, 16 , .3);
    }
    & > svg {
        opacity: 0.5;
    }
    ${props => props.right ? 'right: 0' : 'left: 0'}
`
export default Slider
