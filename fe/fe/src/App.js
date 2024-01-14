import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routes/index.js';
import MasterLayout from './components/masterLayout/index.js';

function App() {
  return (
    <div className="App">
      <MasterLayout>
      <Router>
        <Routes>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </Router>
      </MasterLayout>
    </div>
  );
}

export default App;
