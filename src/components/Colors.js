import React from 'react'
import styled from 'styled-components'

const Colors = () => {
    return (
        <>
          <ColorContainer>
                <h3>Available colors:</h3>
                <label>
                    <input type="radio" name="color"/> <span className="check red"></span>
                </label>
                <label>
                    <input type="radio" name="color"/> <span className="check green"></span>
                </label>
                <label>
                    <input type="radio" name="color"/> <span className="check yellow"></span>
                </label>
                <label>
                    <input type="radio" name="color"/> <span className="check black"></span>
                </label>
                <label>
                    <input type="radio" name="color"/> <span className="check white"></span>
                </label> 
            </ColorContainer>
        </>
    )
}

const ColorContainer = styled.div`
    text-align: center;
    background-color: #191C24;
    border-radius: 5px;
    padding: 10px 20px 20px 20px;
    margin-top: 5px;
    color: #fff;
    & > label {
        display: inline-flex;
        position: relative;
        padding-left: 40px;
        margin: 12px 0 12px 0;
        cursor: pointer;
        font-size: 22px;
        user-select: none;
        &:hover input ~ .check {
            transform: scale(1.1);
        }
    }

    & > label input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        &:checked ~ .check:after { display: block; }

    }
    & > label .check {
        position: absolute;
        top: 0;
        left: 0;
        height: 20px;
        width: 20px;
        border-radius: 50%;
        transition: all .3s;
        &::after {
            content: "";
            position: absolute;
            display: none;
            top: 4px;
            left: 4px;
            width: 12px;
            height: 12px;
            border-radius: 50%;
        }
    } 
    & > label .red {
        border: 4px solid #d62828;
        &:after {background: #d62828}
    }
    & > label .green {
        border: 4px solid #40916c;
        &:after {background: #40916c}
    }
    & > label .yellow {
        border: 4px solid #ffba08;
        &:after {background: #ffba08}
    }
    & > label .black {
        border: 4px solid #000000;
        &:after {background: #000000}
    }
    & > label .white {
        border: 4px solid #f8f9fa;
        &:after {background: #f8f9fa}
    }

`
export default Colors
