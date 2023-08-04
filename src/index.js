import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Welcome from './pages/welcome/Welcome';
import Dashboard from './pages/dashboard/Dashboard';
import Error from './components/error/Error';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Welcome />} />
      <Route path="/dashboard/:id" element={<Dashboard />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
