import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import AddJobPage from "./pages/AddJobPage";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage, { jobLoader } from "./pages/JobPage";

const App = () => {
  const addJobSubmit = (newJob) => {};

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route
          path="/add-job"
          element={<AddJobPage addJobSubmit={addJobSubmit} />}
        />
        <Route path="/job/:id" element={<JobPage />} loader={jobLoader} />
        <Route path="*" element={<NotFoundPage />} /> // route to notfoundpage
        if wrong path is given
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
