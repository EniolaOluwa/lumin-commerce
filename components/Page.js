import styled, { createGlobalStyle } from "styled-components";
import Header from "./Header";

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'signika_regular';
  src: url('/static/Signika-Regular.ttf') format('ttf');
  font-weight: normal;
  font-style: normal;
}

 html {
   --red: #ff0000;
   --black: #393939;
   --grey: #3A3A3A;
   --gray: var(--grey);
   --lightGrey: #e1e1e1;
   --lightGray: var(--lightGrey);
   --offWhite: #ededed;
   --maxWidth: 1000px;
   --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
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
   font-family: 'signika_regular', ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
 }

 a {
   text-decoration: none;
   color: var(--black);
 }

 a:hover {
   text-decoration: underline;
 }

 button {
   font-family: 'radnika_next', ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
 }
`;

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem;
`;

export default function Page({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <InnerStyles>{children}</InnerStyles>
    </div>
  );
}
