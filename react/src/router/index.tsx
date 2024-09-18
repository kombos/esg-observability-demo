import { createBrowserRouter, Outlet } from "react-router-dom";

import IgntHeader from "../components/IgntHeader";
import DataView from "../views/DataView";
import LcaPortal from "../views/LcaPortal";

const items = [
  {
    label: "LCARoadmap",
    to: "/",
  },
  {
    label: "Traceability",
    to: "/traceability",
  },
];
const Layout = () => {
  return (
    <>
      <IgntHeader navItems={items} />
      <Outlet />
    </>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <LcaPortal /> },
      { path: "/traceability", element: <DataView /> },
    ],
  },
]);

export default router;
