import React, { Component } from "react";
import TextInputGroup from "../layout/TextInputGroup";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { getContact, editContact } from "../../actions/ContactAction";

class EditContact extends Component {
  state = {
    name: "",
    address: "",
    phone: "",
    errors: {},
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getContact(id);
  }
  componentWillReceiveProps(nextProps, nextState) {
    const { name, address, phone } = nextProps.contact;
    this.setState({ name, address, phone });
  }

  onSubmit = e => {
    e.preventDefault();

    const { name, address, phone } = this.state;
    
    if (name === "") {
      this.setState({ errors: { name: "Введите имя" } });
      return;
    }

    if (address === "") {
      this.setState({ errors: { address: "Введите адрес" } });
      return;
    }

    if (phone === "") {
      this.setState({ errors: { phone: "Введите номер телефона" } });
      return;
    }

    const { id } = this.props.match.params;

    const editedContact = {
      id,
      name,
      address,
      phone,
    };
    this.props.editContact(editedContact);
    
    this.setState({
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
        <div className="card-header">Редактировать контакт</div>
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
              value="Редактировать контакт"
              className="btn btn-dark btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}
EditContact.propTypes = {
  contact: propTypes.string.isRequired,
  getContact: propTypes.func.isRequired,
};
const mapStateToProps = state => ({
  contact: state.contact.contact,
});
export default connect(
  mapStateToProps,
  { getContact, editContact },
)(EditContact);