import React, { Component } from "react";

export default class ContactsList extends Component {
    render(){
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name:</th>
                        <br />
                        <th>Surname:</th>
                        <br />
                        <th>Phone number</th>
                        <br />
                    </tr>
                </thead>
            </table>
        )
    }
}