import React, { Component, Fragment } from "react";
import styled from "styled-components";

const Input = styled.input`
    width: 10em;
    height: 3em;
    border-radius: 3px;
    border: 1px solid grey;
    padding-left: 1rem;
    margin-left: 2rem;
    &:placeholder{
        color: grey;
    }
`;
const Button = styled.button`
    width: 9.5em;
    height: 2.8em;
    border-radius: 3px;
    border: 1px solid palevioletred;;
    margin-left: 2rem;
    margin-top: 2rem;
    background: palevioletred; 
    color: black;
    font-size: 1em;
    font-weight: 900;
    &:hover{
        cursor:pointer;
    }
`;

export default class Contacts extends Component {
    render(){
        return (
            <Fragment>
                <Input type="text" name="text" placeholder="Name"></Input>
                <Input type="text" name="text" placeholder="Surname"></Input>
                <Input type="text" name="text" placeholder="Phone number"></Input>
                <br />
                <Button type="submit">Add contact</Button>
            </Fragment>
        )
    }
}