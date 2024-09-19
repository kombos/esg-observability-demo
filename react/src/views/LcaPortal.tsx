/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import Distribution from "../components/home/Distribution";
import Manufacturing from "../components/home/Manufacturing";
import MaterialProcessing from "../components/home/MaterialProcessing";
import RawMaterial from "../components/home/RawMaterial";

export default function LcaPortal() {
  const [Tab, setTab] = useState("raw-material");

  const TABS = [
    {
      title: "Raw Material Extraction",
      value: "raw-material",
      component: <RawMaterial />,
    },
    {
      title: "Material Processing",
      value: "material-processing",
      component: <MaterialProcessing />,
    },
    {
      title: "Manufacturing",
      value: "manufacturing",
      component: <Manufacturing />,
    },
    {
      title: "Distribution & Transportation",
      value: "distribution",
      component: <Distribution />,
    },
  ];

  return (
    <>
      <div className="am-esg-process">
        <nav>
          {React.Children.toArray(
            TABS.map((tab) => (
              <button className={Tab === tab?.value ? "active" : ""} onClick={() => setTab(tab?.value)}>
                {tab?.title}
              </button>
            )),
          )}
        </nav>
        <main>{TABS?.find((el) => el?.value === Tab)?.component}</main>
      </div>
    </>
  );
}
