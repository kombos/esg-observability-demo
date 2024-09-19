/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import { BsFillStarFill } from "react-icons/bs";
import { FaMinusCircle } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
import { TbWritingSign, TbWritingSignOff } from "react-icons/tb";
import useEsgobservabilitydemoEsgobservabilitydemo from "../hooks/useEsgobservabilitydemoEsgobservabilitydemo";

export default function Traceability() {
  const { QueryRawMaterialExtractionAll, QueryRawMaterialExtraction } = useEsgobservabilitydemoEsgobservabilitydemo();
  const [Sign1, setSign1] = useState(true);
  const [Sign2, setSign2] = useState(false);

  const DATA = {
    title: "Title Here",
    details: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consequuntur, fuga voluptas quo beatae ut!",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consequuntur, fuga voluptas quo beatae ut!",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consequuntur, fuga voluptas quo beatae ut!",
    ],
    StepData: [
      {
        title: "Title 1",
        hash: "asdfjakjhwnan",
        primaryKey: "asdfjakjhwnan",
        otherKey: "asdfjakjhwnan",
        state: "completed",
      },
      {
        title: "Title 2",
        hash: "asdfjakjhwnan",
        primaryKey: "asdfjakjhwnan",
        otherKey: "asdfjakjhwnan",
        state: "",
      },
      {
        title: "Title 3",
        hash: "asdfjakjhwnan",
        primaryKey: "asdfjakjhwnan",
        otherKey: "asdfjakjhwnan",
        state: "",
      },
      {
        title: "Title 4",
        hash: "asdfjakjhwnan",
        primaryKey: "asdfjakjhwnan",
        otherKey: "asdfjakjhwnan",
        state: "",
      },
    ],
    RatingsData: [
      {
        title: "Raw Material Extraction Stage Emissions: ",
        point: 4,
      },
      {
        title: "Material Processing Stage Emissions: ",
        point: 5,
      },
      {
        title: "Manufacturing Stage Emissions: ",
        point: 4,
      },
      {
        title: "Distribution Stage Emissions: ",
        point: 3,
      },
    ],
  };

  return (
    <div className="am-esg-signature">
      <main>
        {DATA?.StepData &&
          Array.isArray(DATA?.StepData) &&
          DATA?.StepData.length > 0 &&
          React.Children.toArray(
            DATA?.StepData.map((step) => (
              <div className="step">
                <div className={`indicator ${step?.state === "completed" ? "active" : ""}`}>
                  {step?.state === "completed" ? <SiTicktick className="icon" /> : <FaMinusCircle className="icon" />}
                  <span></span>
                </div>
                <div className="content">
                  <h2>{step?.title}</h2>
                  <p className="hash">Hash: {step?.hash}</p>
                  <p className="key primary">Primary Key: {step?.primaryKey}</p>
                  <p className="key others">Other Key: {step?.otherKey}</p>
                </div>
              </div>
            )),
          )}
      </main>
      <aside>
        <h1 className="title">{DATA?.title}</h1>
        <div className="contract">
          <div className="content">
            {React.Children.toArray(DATA?.details?.map((el) => <p>{el}</p>))}
            {DATA?.RatingsData &&
              Array.isArray(DATA?.RatingsData) &&
              DATA?.RatingsData.length > 0 &&
              React.Children.toArray(
                DATA?.RatingsData.map((rate) => (
                  <div className="rating">
                    <p>{rate?.title}</p>
                    <div className="stars">
                      {React.Children.toArray(
                        [...Array(5)].map((el, ind) => (
                          <span className={ind < rate?.point ? "active" : ""}>
                            <BsFillStarFill />
                          </span>
                        )),
                      )}
                    </div>
                  </div>
                )),
              )}
          </div>
          <div className="signs">
            <div className={`sign ${Sign1 ? "active" : ""}`}>
              {Sign1 ? <SiTicktick /> : <FaMinusCircle />} {Sign1 ? <TbWritingSign /> : <TbWritingSignOff />}
            </div>
            <div className={`sign ${Sign2 ? "active" : ""}`}>
              {Sign2 ? <SiTicktick /> : <FaMinusCircle />} {Sign1 ? <TbWritingSign /> : <TbWritingSignOff />}
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
