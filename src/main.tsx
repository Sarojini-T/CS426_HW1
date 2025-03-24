import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./components/Homepage";
import ActivityTrackerPage from "./components/ActivityTracker/ActivityTrackerPage";
import { DataVisualizationPage } from "./components/DataVisualization/DataVisualizationPage";
import { PageNotFound } from "./components/PageNotFound";
import { ResourcesPage } from "./components/Resources/ResourcesPage";
import { StrictMode } from "react";

const router = createBrowserRouter([
  // Create Paths for the Main components in the navbar
  { path: "/", element: <Homepage /> },
  { path: "/Tracker", element: <ActivityTrackerPage /> },
  { path: "/Visuals", element: <DataVisualizationPage /> },
  { path: "/Resources", element: <ResourcesPage /> },
  { path: "*", element: <PageNotFound /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
      <RouterProvider router={router} />
      {/* <App /> */}
  </StrictMode>
);
