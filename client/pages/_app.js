/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import '../public/styles/reset.css';
import '../public/styles/App.css';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
