/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import '../styles/reset.css';
import '../styles/App.css';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
