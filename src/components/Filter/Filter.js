import { Box, Text, Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';

export const Filter = ({ value, onChange }) => {
  // const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onFilter = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <div>
      <Box>
        <Text>Find contacts by name</Text>
        <Input type="text" value={filter} onChange={onFilter} />
      </Box>
    </div>
  );
};
