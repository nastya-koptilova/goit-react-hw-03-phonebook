import styled from 'styled-components';

export const FormEl = styled.form`
  border: 3px solid black;
  width: 450px;
  padding: 16px;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

export const Title = styled.span`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  font-size: 16px;
  margin-bottom: 10px;
  padding: 5px;
`;

export const Button = styled.button`
  font-size: 16px;
  background-color: beige;
  border-radius: 10px;
  cursor: pointer;
  border: none;
  padding: 10px 20px;
`;
