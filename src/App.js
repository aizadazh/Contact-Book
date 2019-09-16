import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contacts from "./components/containers/Contacts";
import AddContact from "./components/containers/AddContact";
import EditContact from "./components/containers/EditContact";
import Header from "./components/presentational/Header";
import { Provider } from "react-redux";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header branding = "Контактная книга" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/contact/edit/:id" component={EditContact} />                
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
