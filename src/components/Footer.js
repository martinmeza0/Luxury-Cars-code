import React from 'react';
import styled from 'styled-components';
const Footer = () => {
    return (
        <>
            <FooterSection>
                <Container>
                    <Location>
                        <h3>Location</h3>
                        <p>Street, Address</p>
                        <p>City, ST 000000</p>
                        <p>Call us: 1-900-COMPANY</p>
                        <p>(8800 9292 0000)</p>
                    </Location>
                    <LegalInformation>
                        <p>Company</p>
                        <p>Partner</p>
                        <p>Jobs</p>
                        <br/>
                        <p>Legal</p>
                        <p>Privacy</p>
                        <p>Terms</p>
                    </LegalInformation>
                    <MapContainer>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13022.940667980794!2d-119.0250865541633!3d35.31256141399857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80ea6bdced2acd95%3A0x7fd7bdef83fb8a57!2sFBT%20Parking!5e0!3m2!1ses-419!2sar!4v1630677172282!5m2!1ses-419!2sar" loading="lazy" title="frame"></iframe>
                    </MapContainer>
                </Container>  
                <Copyright>
                    <p>Copyright © 2021 Company, Inc. All rights reserved.</p>
                </Copyright>
            </FooterSection>
        </>
    )
}

const FooterSection = styled.footer`
    background-color: #191C24;
    color: #fff;
    margin-top: 10vh;

`

const Container = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 30px;
    margin-bottom: 20px;
    align-items: center;
    grid-template-rows: auto;
`

const Location = styled.div`
    & > h3 {
        margin-bottom: 20px;
        font-size: 1.3rem;
        font-weight: 600;
    }
    & > p {
        margin-bottom: 3px;
        font-size: .9rem;
    }
    @media (max-width: 768px) {
        grid-column: 1 / 3;
}

`
const MapContainer = styled.div`
    & > iframe {
        width: 100%;
        height: 200px;
        border: none;
    }
    @media (max-width: 768px) {
        margin-top: 20px;
        grid-column: 1 / 4;
    }
`
const LegalInformation = styled.div`
    & > p {
        cursor: pointer;
    }
`
const Copyright = styled.div`
    text-align: left;
    font-size: .7rem;
    padding: 20px 20px 20px 30px;
    background-color: #15171b;
`
export default Footer
