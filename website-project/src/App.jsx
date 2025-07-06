import React, { useState } from 'react';
import Content from './content';
import NavBar from './navbar';
import './index.css';

function App() {
  const [page, setPage] = useState('home');

  return (
    <>
      <NavBar setPage={setPage} />
      <Content page={page} />
    </>
  );
}
export default App;

