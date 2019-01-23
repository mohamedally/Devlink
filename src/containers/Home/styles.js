import styled from 'styled-components'
import { Flex } from 'grid-styled'

export const Container = styled(Flex)`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
`;