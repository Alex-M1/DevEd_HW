import styled from 'styled-components';

const Button = styled.a`
  padding: 3px 5px;
  border: 2px solid #4A90E2;
  border-radius: 4px;
  transition: all 300ms ease;
  box-shadow: 0px 4px 10px 2px rgba(0,0,0, 0.2);
  position: relative;
  color: #4A4A4A;
  display: inline-block;
  cursor: pointer;
  min-width: 40px;
  text-align: center;
  &:before{
    position: absolute;
    content: '';
    width: 0%; height: 100%;
    background: #4A90E2;
    top: 0; left: 50%;
    z-index: -1;
    transition: all 0ms ease;
  }
  &:hover{
    color: white; 
    box-shadow:none;
    &:before{
      position: absolute;
      content: '';
      width: 100%; height: 100%;
      background: #4A90E2;
      top: 0; left: 0%;
      z-index: -1;
      transition: all 300ms ease;
    }
  }
`;
export default Button;
