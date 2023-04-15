import styled from 'styled-components';
export const List = styled.ul`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin: 0 20px 20px 20px;
`;
export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Text = styled.p`
  padding: 10px;
  margin: 0;
`;
export const Btn = styled.button`
  width: 70px;
  height: 35px;
  border: 2px solid #ac40e5;
  border-radius: 5px;
  background-color: silver;
  color: #120318;
  :hover,
  :focus {
    border: 2px solid #00bfff;
    box-shadow: rgba(30, 144, 255, 0.3) 2px 2px 2px 0px,
      rgba(30, 144, 255, 0.15) 4px 4px 6px 2px;
  }
`;
