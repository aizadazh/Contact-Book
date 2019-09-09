import React, { Component } from "react";
import Contact from "./Contact";
import { Provider, connect } from "react-redux";
import propTypes from "prop-types";
import store from "../../store";
import { getContacts } from "../../actions/ContactAction";

class Contacts extends Component {
  componentDidMount() {
    this.props.getContacts();
  }
  render() {
    
    const { contacts } = this.props;
    return (
      <Provider store={store}>
        <h1 className="display-5 mb-2">
          <span className="text-danger">Список контактов</span>
        </h1>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </Provider>
    );
  }
}
Contacts.propTypes = {
  contacts: propTypes.array.isRequired,
  getContacts: propTypes.func.isRequired,
};

const mapStateToProps = state => ({
  contacts: state.contact.contacts,
});

export default connect(
  mapStateToProps,
  { getContacts },
)(Contacts);

