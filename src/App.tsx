import { Routes, Route, A } from '@solidjs/router';
import type { Component } from 'solid-js';
import HeadToHeadPage from './Pages/HeadToHeadPage';

const App: Component = () => {
  return (
    <>
      <A href={'/head-to-head'}>Head to Head</A>
      <Routes>
        <Route path='/' element={<div>Home</div>} />
        <Route path='/head-to-head' element={<HeadToHeadPage />} />
      </Routes>
    </>
  );
};

export default App;
