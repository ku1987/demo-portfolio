const server = {
  protocol: "http",
  host: "127.0.0.1",
  port: 3002,
};

const { protocol, host, port } = server;
const BASE_URL = `${protocol}://${host}:${port}`;

export default BASE_URL;
