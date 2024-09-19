import { createBrowserRouter, Outlet } from "react-router-dom";

import IgntHeader from "../components/IgntHeader";
import LcaPortal from "../views/LcaPortal";
import MarketPlace from "../views/MarketPlace";
import ProductQR from "../views/ProductQR";
import StoreFront from "../views/StoreFront";
import Traceability from "../views/Traceability";

const items = [
  {
    label: "LCARoadmap",
    to: "/",
  },
  {
    label: "Traceability",
    to: "/traceability",
  },
  {
    label: "Marketplace",
    to: "/marketplace",
  },
  {
    label: "StoreFront",
    to: "/store",
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
      { path: "/traceability", element: <Traceability /> },
      { path: "/marketplace", element: <MarketPlace /> },
      { path: "/store", element: <StoreFront /> },
      { path: "/productQR", element: <ProductQR /> },
    ],
  },
]);

export default router;
