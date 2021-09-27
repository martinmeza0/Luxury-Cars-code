import styled from 'styled-components';

    const GridContainer = styled.main`
        position: relative;
        top: -10vh;
        max-width: 1000px;
        margin: auto;
        padding: 20px;
        display: -ms-grid;
        display: grid;
        grid-template-columns: repeat(3, 300px);
        grid-gap: 20px;
        justify-content: center;
        align-content: center;
        background-color: #ccc;
        border-radius: 5px;
        box-shadow: 0px 7px 16px -4px rgba(0, 0, 0, 0.75);
        @media (max-width: 1024px) {
            grid-template-columns: repeat(3, 1fr);
        }

        @media (max-width: 768px) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media (max-width: 490px) {
            grid-template-columns: repeat(1, 1fr);
        }
    `
    export {GridContainer};

    const SingleContainer = styled(GridContainer) `
        display: block;
        overflow: hidden;

    `
    export {SingleContainer};
