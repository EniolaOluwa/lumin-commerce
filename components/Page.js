import styled, { createGlobalStyle } from "styled-components";
import Banner from "./Banner";
import Header from "./Header";
import { Box, extendTheme } from "@chakra-ui/react";
import { Global } from "@emotion/react";

export const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'signika_regular';
        src: url('/static/Signika-Regular.ttf') format('ttf');
        font-weight: normal;
        font-style: normal;
      }

      html {
        box-sizing: border-box;
        font-size: 62.5%;
      }

      *, *:before, *:after {
        box-sizing: inherit;
      }

      body {
        padding: 0;
        margin: 0;
        line-height: 2 ;
        font-size: 1.5rem;
      }
      `}
  />
);

export const theme = extendTheme({
  fonts: {
    heading: "signika_regular",
    body: "signika_regular",
  },
});

export default function Page({ children }) {
  return (
    <Box>
      <Header />
      <Banner />
      <Box margin="0 auto">{children}</Box>
    </Box>
  );
}
