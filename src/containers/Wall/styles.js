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
  background-color: whitesmoke;
`;

export const Container2 = styled(Flex)`
  display: flex;
  flex-direction: column;
  /* height: 150px;
  width: 150px; */
  margin: 15px;
  padding: 5px;
  font-family: ${({ theme }) => theme.fonts.primary.family};
  font-weight: ${({ theme }) => theme.fonts.primary.weight};
  background-color: white;
  box-shadow: 5px 10px 18px #888888;
`;

export const Title = styled(Flex)`
  font-weight: bold;
  font-size: 2.5rem;
  justify-content: center;
`;
export const Name = styled(Flex)`
  font-weight: bold;
  font-size: 1.5rem;
`;

export const People = styled(Flex)`
  font-weight: bold;
  font-size: 1rem;
`;

export const ThreadTitle = styled(Flex)`
  font-weight: bold;
  font-size: 3rem;
  justify-content: center;
  color: #333;
`;
