// Entry point for the build script in your package.json
// import "@hotwired/turbo-rails"
// import "./controllers"

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/messages');
      const json = await response.json();
      setData(json);
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Hello World!</h1>
      <div>{JSON.stringify(data)}</div>
    </>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root'),
);
