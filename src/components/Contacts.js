import React, { Component, Fragment } from "react";
import styled from "styled-components";

const Input = styled.input`
    width: 10em;
    height: 3em;
    border-radius: 3px;
    border: 1px solid grey;
    &:placeholder{
        color: grey;
    }
`;

export default class Contacts extends Component {
    render(){
        return (
            <Fragment>
                <Input type="text" name="text" placeholder="Name"></Input>
                <Input type="text" name="text" placeholder="Surname"></Input>
                <Input type="text" name="text" placeholder="Phone number"></Input>
                <button type="submit">Add contact</button>
            </Fragment>
        )
    }
}