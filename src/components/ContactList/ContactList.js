import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import operations from "../../redux/operations";
import { getVisibleContacts } from "../../redux/selector";

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onRemoveContact = (contactId) =>
    dispatch(operations.removeContact(contactId));

  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          {contact.name + ":" + contact.number}
          {
            <button
              type="button"
              name="delete"
              onClick={() => onRemoveContact(contact.id)}
            >
              delete
            </button>
          }
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  onRemoveContact: PropTypes.func,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
