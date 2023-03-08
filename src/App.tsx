
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
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <Header />
      <TopNavigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/volunteer",
        element: <Volunteer />,
      },
      {
        path: "/submit-signal",
        element: <SubmitSignal />,
      },
    ]
  },
]);

export const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;