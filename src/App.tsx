import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from 'routes/home';
import { AboutUs } from "routes/about-us";
import { Members } from "routes/members";
import { Frauds } from "routes/frauds";
import { SubmitSignal } from 'routes/submit-signal';
import { Reports } from "routes/reports";
import { Volunteer } from 'routes/volunteer';
import { NotFound } from 'routes/not-found';
import { PageLayout } from "layouts/page-layout";

export const App = () => {
  return (
    <BrowserRouter >
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/members" element={<Members />} />
          <Route path="/frauds" element={<Frauds />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/submit-signal" element={<SubmitSignal />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;