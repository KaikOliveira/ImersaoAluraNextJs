import styled from 'styled-components'

const Title = styled.h1`
  background: #000;
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return <Title>My page</Title>
}
