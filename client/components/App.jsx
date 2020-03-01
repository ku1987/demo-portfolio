// import React, { useState, useEffect } from 'react';
// import './reset.css';
// import './App.css';
// import axios from 'axios';
// import server from './config';

// const { port } = server;
// const homeUrl = `http://localhost:${port}`;

// const getData = async () => {
//   const res = await axios.get(homeUrl);
//   return res.data;
// };
// const App = () => {
//   const [data, setData] = useState({});
//   useEffect(() => {
//     getData()
//       .then((resData) => setData(resData));
//   });
//   return (
//     <div className="App">
//       <header className="App-header">
//         <div>{data.msg}</div>
//       </header>
//     </div>
//   );
// };

// export default App;
