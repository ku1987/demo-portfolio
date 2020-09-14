import styled, { keyframes } from 'styled-components';

const protocol = 'http';
const host = '127.0.0.1';
const port = 3002;

const server = {
  protocol,
  host,
  port,
};

const BASE_URL = `${protocol}://${host}:${port}`;

const SITE_TITLE = 'Demo Portfolio';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const FadeIn = styled.div`
  animation: ${fadeIn} .4s ease-in-out;
`;

const primaryColor = '#23232e';

const constants = {
  server,
  BASE_URL,
  SITE_TITLE,
  FadeIn,
  primaryColor,
};

export default constants;
