import { Component } from "react";
import { connect } from "react-redux";
import ContactList from "./components/ContactList/ContactList";
import Form from "./components/Form/Form";
import Filter from "./components/Filter/Filter";
import operations from "./redux/operations";
class App extends Component {
  componentDidMount() {
    this.props.fetchContact();
  }
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <Form />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  fetchContact: () => dispatch(operations.fetchContact()),
});
export default connect(null, mapDispatchToProps)(App);
