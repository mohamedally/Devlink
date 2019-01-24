import styled from "styled-components";
import { Flex } from "grid-styled";

export const Container = styled(Flex)`
  display: flex;
  flex-direction: column;
  /* height: 150px;
  width: 150px; */
  margin: 15px;
  padding: 5px;
  align-items: center;
  justify-content: center;
  text-justify: center;
  font-family: ${({ theme }) => theme.fonts.primary.family};
  font-weight: ${({ theme }) => theme.fonts.primary.weight};
  background-color: lightcoral;
`;

export const Title = styled(Flex)`
  font-weight: bold;
  justify-content: center;
  font-size: 1.5rem;
`;