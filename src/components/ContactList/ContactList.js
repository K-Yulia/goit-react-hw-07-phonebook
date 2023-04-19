import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import { Contact } from './Contact';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  return (
    <List>
      {visibleContacts.length > 0 &&
        visibleContacts.map(contact => {
          return (
            <Contact
              key={contact.id}
              name={contact.name}
              phone={contact.phone}
              id={contact.id}
            />
          );
        })}
    </List>
  );
};
