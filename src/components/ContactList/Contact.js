import PropTypes from 'prop-types';
import { Item, Text, Btn } from './ContactList.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export const Contact = ({ name, phone, id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <Item>
      <Text>
        {name}: {phone}
      </Text>
      <Btn type="button" onClick={handleDelete}>
        Delete
      </Btn>
    </Item>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
