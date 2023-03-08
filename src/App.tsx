import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from './components/header';
import { TopNavigation } from './components/top-navigation';
import { Footer } from './components/footer';

import { Home } from './routes/home';
import { SubmitSignal } from './routes/submit-signal';
import { Volunteer } from './routes/volunteer';
import { NotFound } from './routes/not-found';

export const App = () => {
  return (
    <BrowserRouter >
      <Header />
      <TopNavigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/submit-signal" element={<SubmitSignal />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;