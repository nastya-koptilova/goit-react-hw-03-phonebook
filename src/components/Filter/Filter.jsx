import PropTypes from 'prop-types';
import { Title, Input } from './Filter.Styled';

export function Filter({ value, onSearch }) {
  return (
    <div>
      <Title>Find contacts by name:</Title>
      <Input type="text" name="filterTerm" value={value} onChange={onSearch} />
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};
