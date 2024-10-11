import {createBrowserRouter, Outlet} from "react-router-dom";
import React from "react";
import Home from './features/home/Home.tsx';
import Fundamentals from "./features/webgl/fundamentals/Fundamentals.tsx";
import Host from "./Host.tsx";

const HostLayout = () => (
  <Host>
    <Outlet />
  </Host>
);

export const AppRouter = createBrowserRouter([
  {
    element: <HostLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/fundamentals',
        element: <Fundamentals />,
      },
    ],
  },
]);
