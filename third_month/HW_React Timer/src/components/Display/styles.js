import styled from 'styled-components';
import { themes } from '../../constants/theme';

const DisplayWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 10px 0;
`;

const DisplayIpt = styled.input`
  padding: 4px 5px;
  background: ${({ theme }) => themes[theme].input};
  color: ${({ theme }) => themes[theme].color};
`;
export { DisplayWrapper, DisplayIpt };
