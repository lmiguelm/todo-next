import { ThemeProvider } from 'styled-components';

import theme from '../styles/theme';
import GlobalStyle from '../styles/global';

import { AuthProvider } from '../context/auth';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
          <GlobalStyle/>
        </ThemeProvider>
      </AuthProvider>
    </>
  );
}
export default MyApp;
