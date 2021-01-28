import React from 'react';
import Head from 'next/head';

export default function SiteHead() {
  return (
    <Head>
      <title>Quiz Ciencia | Kaik Oliveira</title>
      <link rel="icon" href="https://svgsilh.com/svg/30442.svg" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
      <meta property="og:description" content="Quiz sobre de Ciencias" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="Quiz de Ciencias" />
      <meta property="og:url" content="https://quiz-ciencia-alura.vercel.app/" />
      <meta property="og:image" content="" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="660" />
      <meta property="og:image:alt" content="Quiz Ciencias" />
      <meta property="twitter:description" content="Quiz sobre Ciencias" />
      <meta property="twitter:creator" content="Kaik Oliveira" />
      <meta property="twitter:image" content="" />
      <meta property="twitter:site" content="Quiz sobre Ciencias" />
    </Head>
  );
}
