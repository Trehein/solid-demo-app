import { Routes, Route, A } from '@solidjs/router';
import type { Component } from 'solid-js';
import HeadToHeadPage from './Pages/HeadToHeadPage';
import NavBar from './Components/NavBar/NavBar';
import HomePage from './Pages/HomePage';

const App: Component = () => {
  return (
    <div style={{margin: '0px'}}>
      <NavBar />
      {/* <A href={'/head-to-head'}>Head to Head</A> */}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/head-to-head' element={<HeadToHeadPage />} />
      </Routes>
    </div>
  );
};

export default App;
