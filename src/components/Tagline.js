import React from 'react';
import styled from 'styled-components';
import background from '../images/car_bg.jpg';

const Tagline = () => {
    return (
        <>
            <TaglineContainer>
                <Phrase>
                    <Tittle>Luxury <Span>Cars</Span></Tittle>
                    <P>Because we love the <Span>luxury</Span> in our motors</P>
                </Phrase>
            </TaglineContainer>
        </>
    )
}

//Styles
const TaglineContainer = styled.section`
    background: url(${background}) center/100% no-repeat;
    background-attachment: fixed cover;
    height: 80vh;
    color: #fff;
`
const Phrase = styled.div`
    padding: 30px;
    text-align: left;
`
const Tittle = styled.h1`
    font-size: 3rem;
    font-weight: 600;
` 
const P = styled.p`
    font-weight: 300;
    font-style: italic;
    font-size: 1.5rem;
`
const Span = styled.span`
    color: #A81010;
`

export default Tagline