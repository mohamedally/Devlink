import styled from "styled-components";
import { Flex } from "grid-styled";

export const StyledH3 = styled(Flex)`
  justify-content: center;
  font-size: 3rem;
  color: #bb1133;
  font-family: ${({ theme }) => theme.fonts.primary.family};
  font-weight: ${({ theme }) => theme.fonts.primary.weight};
`;
