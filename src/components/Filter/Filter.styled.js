import styled from 'styled-components';
export const Box = styled.label`
  display: flex;
  flex-direction: column;
  margin: 4px auto;
  align-items: center;
  text-align: center;
`;
export const Text = styled.p`
  margin: 0;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 250px;
  padding: 4px 8px;
  border: 2px solid #ac40e5;
  border-radius: 5px;
  outline: none;
  background-color: silver;
  color: #120318;
  :hover,
  :focus {
    border: 2px solid #00bfff;
    box-shadow: rgba(30, 144, 255, 0.3) 2px 2px 2px 0px,
      rgba(30, 144, 255, 0.15) 4px 4px 6px 2px;
  }
`;
