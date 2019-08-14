import React, { Component } from "react";
import propTypes from "prop-types";
import TextInputGroup from "../layout/TextInputGroup";
import { connect } from "react-redux";
import { addContact } from "../../actions/ContactAction";

class AddContact extends Component {
    state = {
        name: "",
        address:"",
        phone: "",
        errors: {},
    };
    onSubmit = e => {
        e.preventDefault();

        const { name, address, phone } = this.state;
        if (name === "") {
            this.setState({errors: {name: "Пожалуйста, введите имя"} });
            return;
        }
        if (phone ==="") {
            this.setState({errors: {phone: "Пожалуйста, введите номер телефона"} });
            return;
        }
        if (address ==="") {
            this.setState({errors: {address: "Пожалуйста, введите адрес"} });
            return;
        }
        const newContact = {
            name,
            address,
            phone,
        };
        this.props.addContact(newContact);

        this.setState = ({
            name: "",
            address: "",
            phone: "",
            errors: {},
        });

        this.props.history.push("/");
    };
    onChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { name, address, phone, errors } = this.state;  

        return (
            <div className="card mb-3">
                <div className="card-header">Добавить контакт</div>
                    <div className="card-body">
                        <form onSubmit={this.onSubmit}>
                            <TextInputGroup
                                label="ФИО"
                                name="name"
                                placeholder="Введите имя"
                                value={name}
                                onChange={this.onChange}
                                error={errors.name}
                            />
                            <TextInputGroup
                                label="Адрес"
                                name="address"
                                type="address"
                                placeholder="Введите адрес"
                                value={address}
                                onChange={this.onChange}
                                error={errors.address}
                            />
                            <TextInputGroup
                                label="Номер телефона"
                                name="phone"
                                placeholder="Введите номер телефона"
                                value={phone}
                                onChange={this.onChange}
                                error={errors.phone}
                            />
                            <input
                                type="submit"
                                value="Добавить контакт"
                                className="btn btn-danger btn-block"
                            />
                        </form>
                    </div>
                </div>   
        );
    }
}
AddContact.propTypes = {
    addContact: propTypes.func.isRequired,
    };
export default connect(
    null,
    { addContact },
    )(AddContact);


