import styled from 'styled-components';
import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikError,
} from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Field = styled(FormikField)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 8px auto;
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

export const Btn = styled.button`
  max-width: 120px;
  margin: 8px auto;
  padding: 10px 15px;
  border: 2px solid #ac40e5;
  border-radius: 5px;
  font-family: SFProText-Regular, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.2;
  background: linear-gradient(to right, #642b73, #c6426e);
  color: #ffffff;
  cursor: pointer;
  :hover,
  :focus {
    background-color: #b0e0e6;
  }
`;

export const ErrorMessage = styled(FormikError)`
  margin-bottom: 12px;
  font-size: 12px;
  font-style: italic;
  color: rgb(62 227 242);
  width: 300px;
`;
