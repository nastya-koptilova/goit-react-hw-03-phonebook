import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormEl, Label, Title, Input, Button } from './Form.Styled';

export class Form extends Component {
  state = {
    name: '',
    tel: '',
  };

  onNameChange = event => {
    const name = event.target.value;
    this.setState({ name: name });
  };

  onTelChange = event => {
    const tel = event.target.value;
    this.setState({ tel: tel });
  };

  onAddClick = event => {
    event.preventDefault();

    const contact = {
      name: this.state.name,
      tel: this.state.tel,
    };

    const name = contact.name;

    this.props.onAddContact(contact, name);

    this.reset();
  };

  reset() {
    this.setState({
      name: '',
      tel: '',
    });
  }

  render() {
    return (
      <FormEl onSubmit={this.onAddClick}>
        <Label>
          <Title>Name</Title>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.onNameChange}
            value={this.state.name}
          />
          <Title>Nubmer</Title>
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.tel}
            onChange={this.onTelChange}
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </FormEl>
    );
  }
}

Form.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};
