import styled from "styled-components";
import { Flex } from "grid-styled";

export const Text = styled(Flex)`
  color: #a40e2f;
  font-size: 4em;
  font-family: ${({ theme }) => theme.fonts.primary.family};
  font-weight: ${({ theme }) => theme.fonts.primary.weight};
`;

export const Container = styled(Flex)`
  background-color: whitesmoke;
  height: 15em;
  width: 100%;
  align-items: center;
  justify-content: center;
  /* padding: 20em 10em */
  margin: 0px 0px;
`;
