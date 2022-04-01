/*
@description: Header Component
*/

import styled from "styled-components";

const StyledHeader = styled.div`
  background-color: #555;
  color: #eee;
  font-size: xx-large;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export default () => {
  return <StyledHeader>Newsletter Evidence</StyledHeader>;
};
