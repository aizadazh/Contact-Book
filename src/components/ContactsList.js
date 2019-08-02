import React, { Component } from "react";


export default class ContactsList extends Component {
    render(){
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name:</th>
                        <th>Surname:</th>
                        <th>Phone number</th>
                    </tr>
                </thead>
            </table>
        )
    }
}