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
  font-weight: bolder;
  justify-content: center;
`;
export const Title2 = styled(Flex)`
  font-weight: bolder;
  font-size: 2rem;
`;
export const Title3 = styled(Flex)`
  font-weight: bolder;
  font-size: 1.25rem;
`;
export const Name = styled(Flex)`
  font-style: italic;
  font-weight: bolder;
  font-size: 2.5rem;
`;
