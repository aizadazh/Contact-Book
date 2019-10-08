import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { deleteContact } from "../../actions/ContactAction";


export class Contact extends Component {
    state = {
        showContactInfo: false,
    };
    onDeleteClick  = id => {
        this.props.deleteContact(id);
    };
    render(){
        console.log(this.props.contact)
        const { id, name, phone } = this.props.contact;
        const { showContactInfo } = this.state;
        
        var nameOfStreet=''
        if(this.props.contact.address.constructor === String){
            nameOfStreet=this.props.contact.address
        }else{
            nameOfStreet=this.props.contact.address.street
        }
        
        return(
            <div>
                <h4>
                    {name}{" "}
                    <i 
                        onClick = {() =>
                            this.setState({
                                showContactInfo: !this.state.showContactInfo,
                            })
                        }
                        className = "fas fa-sort-down"
                        style = {{cursor: "pointer", color: "blue"}}
                        />
                    <i 
                        className = "fas fa-times"
                        style = {{cursor: "pointer", float:"right", color: "red"}} 
                        onClick = {this.onDeleteClick.bind(this, id)}
                    />
                    <Link to ={`contact/edit/${id}`}>
                        <i
                            className = "fas fa-pencil-alt"
                            style={{
                                cursor: "pointer",
                                float: "right",
                                color: "green",                               
                                marginRight: "1rem",
                                fontSize: "0.7em",
                                paddingTop: "0.3em",
                            }}
                        />
                    </Link>                    
                </h4>
                    {showContactInfo ? (
                        <ul className="list-group">
                            <li className="list-group-item">Address: {nameOfStreet}</li>
                            <li className="list-group-item">Phone: {phone}</li>
                        </ul>
                    ) : null }
            </div>
        );
    }
}
Contact.propTypes = {
    contact: propTypes.object.isRequired,
    deleteContact: propTypes.func.isRequired,
};
export default connect(
    null, 
    { deleteContact },    
)(Contact);
