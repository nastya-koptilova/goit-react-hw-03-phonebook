import PropTypes from 'prop-types';
import { Item, Title, Button, Span } from './Contacts.Styled';

export function Contacts({ contacts, onDelete }) {
  return (
    <ul>
      {contacts.map(({ name, id, tel }) => {
        return (
          <Item key={id}>
            <Span />
            <Title>
              {name}: {tel}
            </Title>
            <Button type="button" onClick={() => onDelete(id)}>
              Delete
            </Button>
          </Item>
        );
      })}
    </ul>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      tel: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
