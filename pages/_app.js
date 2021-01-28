import React from 'react';

import { ThemeProvider } from 'styled-components';

import db from '../db.json';
import theme from '../src/styles/theme';

import GlobalStyle from '../src/styles/GlobalStyle';
import SiteHead from '../src/components/Head';
import GitHubCorner from '../src/components/GithubCorner';
import Footer from '../src/components/Footer';
import QuizLogo from '../src/components/QuizLogo';
import QuizContainer from '../src/components/QuizContainer';
import QuizBackground from '../src/components/QuizBackground';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <SiteHead />
      <GlobalStyle />
      <GitHubCorner projectUrl="https://github.com/davifelix5/quiz-with-nextjs" />
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <QuizLogo />
          <Component {...pageProps} />
          {' '}
          <Footer />
        </QuizContainer>
      </QuizBackground>
    </ThemeProvider>
  );
}
