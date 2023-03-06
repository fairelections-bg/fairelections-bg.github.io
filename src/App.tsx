import React from 'react';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Header } from './components/header';
import { TopNavigation } from './components/top-navigation';
import { Footer } from './components/footer';
import { Home } from './routes/home';
import { ErrorPage } from './routes/error-page';
import { SubmitSignal } from './routes/submit-signal';
import { Volunteer } from './routes/volunteer';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/volunteer",
    element: <Volunteer />,
  },
  {
    path: "/submit-signal",
    element: <SubmitSignal />,
  },
]);

export const App = () => {
  return (
    <>
      <Header />
      <TopNavigation />
      <main>
        <RouterProvider router={router} />
        
      </main>
      <Footer />
    </>
  );
};

export default App;