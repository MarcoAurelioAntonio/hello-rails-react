import React, { Suspense } from 'react'; 
import { Route, Routes } from 'react-router-dom';
import Greeting from './components/Greeting';
//const Greeting = lazy(() => import('./components/Greeting.js'));

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Greeting />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
