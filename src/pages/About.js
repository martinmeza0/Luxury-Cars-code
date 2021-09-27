import React from 'react'
import Menu from '../components/Menu'
import Tagline from '../components/Tagline'
import {SingleContainer} from '../components/Styles'
import styled from 'styled-components';
import Footer from '../components/Footer'
const About = () => {
    return (
        <>
            <Menu/>
            <Tagline/>
            <SingleContainer>
                <Tittle>Morbi ullamcorper vel libero sit amet vehicula?</Tittle>
                <Text>
                    Donec non vestibulum velit. Praesent viverra, dui eget dignissim sodales, ipsum magnamet fermentum. Etiam volutpat ac est vitae rhoncus. Etiam finibus quis nisl a sagittis. Donec quis auctor justo.
                </Text>
                <Tittle>Fusce vitae metus a urna dictum pharetra?</Tittle>
                <Text>
                   Maecenas et nisi vel lectus rhoncus varius condimentum eget risus. Morbi purus justo, maximus nec blandit at, varius id nibh. Maecenas blandit nisl ac luctus pretium. Nunc metus purus, elementum et ultricies et, laoreet eget diam.Nunc at sapien consectetur, porta nibh id, elementum nibh. Sed cursus aliquet risus, eget iaculis odio sagittis sed. Curabitur nunc leo, placerat hendrerit venenatis quis, tempor at diam. Aliquam mollis nec est et molestie. Morbi porta dignissim ex, sit amet gravida nulla dictum eu. Cras viverra, nulla quis gravida convallis, libero magna tempus nibh, vel lacinia nulla ligula efficitur nulla. Duis dictum id velit sit amet fermentum. Etiam volutpat ac est vitae rhoncus. Etiam finibus quis nisl a sagittis. Donec quis auctor justo.
                </Text>
                <Tittle>Fusce vitae metus a urna dictum pharetra?</Tittle>
                <Text>
                    Suspendisse potenti. Curabitur quis metus eget odio tempor ultricies. Nullam interdum risus eu posuere finibus. Mauris semper, purus quis finibus condimentum, arcu augue suscipit neque, in imperdiet diam felis sit amet leo. Nunc id lacus ac felis rhoncus posuere vitae vel leo. Mauris finibus iaculis enim a sagittis. Maecenas et nisi vel lectus rhoncus varius condimentum eget risus. Morbi purus justo, maximus nec blandit at, varius id nibh. Maecenas blandit nisl ac luctus pretium. Nunc metus purus, elementum et ultricies et, laoreet eget diam.Nunc at sapien consectetur, porta nibh id, elementum nibh. Sed cursus aliquet risus, eget iaculis odio sagittis sed. Curabitur nunc leo, placerat hendrerit venenatis quis, tempor at diam. Aliquam mollis nec est et molestie. Morbi porta dignissim ex, sit amet gravida nulla dictum eu. Cras viverra, nulla quis gravida convallis, libero magna tempus nibh, vel lacinia nulla ligula efficitur nulla. Duis dictum id velit sit amet fermentum. Etiam volutpat ac est vitae rhoncus. Etiam finibus quis nisl a sagittis. Donec quis auctor justo.
                </Text>
                <Tittle>Fusce vitae metus a urna dictum pharetra?</Tittle>
                <Text>
                     Suspendisse potenti. Curabitur quis metus eget odio tempor ultricies. Nullam interdum risus eu posuere finibus. Mauris semper, purus quis finibus condimentum, arcu augue suscipit neque, in imperdiet diam felis sit amet leo. Nunc id lacus ac felis rhoncus posuere vitae vel leo. Mauris finibus iaculis enim a sagittis. Maecenas et nisi vel lectus rhoncus varius condimentum eget risus. Morbi purus justo, maximus nec blandit at, varius id nibh. Maecenas blandit nisl ac luctus pretium. Nunc metus purus, elementum et ultricies et, laoreet eget diam.Nunc at sapien consectetur, porta nibh id, elementum nibh. Sed cursus aliquet risus, eget iaculis odio sagittis sed. Curabitur nunc leo, placerat hendrerit venenatis quis, tempor at diam. Aliquam mollis nec est et molestie. Morbi porta dignissim ex, sit amet gravida nulla dictum eu. Cras viverra, nulla quis gravida convallis, libero magna tempus nibh, vel lacinia nulla ligula efficitur nulla. Duis dictum id velit sit amet fermentum. Etiam volutpat ac est vitae rhoncus. Etiam finibus quis nisl a sagittis. Donec quis auctor justo.
                </Text>
            </SingleContainer>
            <Footer></Footer>
        </>

    )
}

const Tittle = styled.h3`
    margin: 30px 0px 20px 0px;
    color: #bb1c1c;
    border-bottom: 1px solid rgb(170, 170, 170);
`
const Text = styled.p`
    padding: 15px;
    background-color: #ddd;
    border-radius: 5px;
    font-size: .9rem;
`

export default About
