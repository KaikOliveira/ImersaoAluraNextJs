import styled from 'styled-components';

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: 4px;
  overflow: hidden;

  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};

  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;

  & > *:first-child {
    margin-top: 0;
  }

  & > *:last-child {
    margin-bottom: 0;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  form {
    display: flex;
    flex-direction: row;
    flex: 1;

    input {
      background: transparent;
      border: 1px solid ${({ theme }) => theme.colors.primary};
      height: 35px;
      width: 60%;
      color: #312e38;
      padding: 10px;
      &::placeholder {
        padding: 0px;
      }
    }

    button {
      margin-left: 10px;
      background-color: ${({ theme }) => theme.colors.primary};
      border: 1px solid ${({ theme }) => theme.colors.mainBg};
      height: 35px;
      width: 35%;
    }
  }
  
@media screen and (max-width: 500px) {
  form {
    display: flex;
    flex-direction: column;

    input {
      width: 100%;
    }

    button {
      width: 100%;
      margin-left: 0;
      margin-top: 8px;
    }
  }
}


`;

export default Widget;
