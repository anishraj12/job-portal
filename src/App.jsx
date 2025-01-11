import React, { Children } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import LandingPage from './pages/LandingPage'
import Onboarding from './pages/Onboarding'
import JobListing from './pages/JobListing'
import JobPage from './pages/JobPage'
import SaveJobs from './pages/SaveJobs'
import MyJobs from './pages/MyJobs'
import { ThemeProvider } from './components/theme-provider'
import "./App.css";

const router = createBrowserRouter([
  {
    element: <AppLayout></AppLayout>,
    children: [
      {
        path: "/",
        element: <LandingPage></LandingPage>
      },
      {
        path: "/onboarding",
        element: <Onboarding></Onboarding>
      },
      {
        path: "/jobs",
        element: <JobListing></JobListing>
      },
      {
        path: "/job/:id",
        element: <JobPage></JobPage>
      },
      {
        path: "/post-job",
        element: <SaveJobs></SaveJobs>
      },
      {
        path: "/my-jobs",
        element: <MyJobs></MyJobs>
      }
    ]
  }
])


function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}


export default App