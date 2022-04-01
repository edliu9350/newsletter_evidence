/*
@description: Main Component
*/

import styled from "styled-components";
import Header from "./Header";
import Content from "./Content";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default () => {
  return (
    <Container>
      <Header />
      <Content />
    </Container>
  );
};
