import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #00000070;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  border-radius: 4px;

  img {
    width: 58px;
    margin-right: 23px;
  }

  p {
    color: #222;
    font-family: Roboto, sans-serif;
  }

  a {
    color: #222;
    text-decoration: none;
    transition: .3s;
    font-family: Roboto, sans-serif;
    
    &:hover,
    &:focus {
      color: #fcfcfc;
      opacity: .5;
    }

    span {
      text-decoration: underline;
      font-family: Roboto, sans-serif;
    }
  }
`;

export default function Footer(props) {
  return (
    <FooterWrapper {...props}>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado
        {' '}
        <a href="https://github.com/KaikOliveira" target="_blank" rel="noreferrer noopener">
          <span>Kaik Oliveira</span>
        </a>
        {' '}
        durante
        {' '}
        a
        {' '}
        <a href="https://www.alura.com.br/">
          <span>Imersão React da Alura</span>
        </a>
      </p>
    </FooterWrapper>
  );
}
