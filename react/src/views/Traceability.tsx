/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import { BsFillStarFill } from "react-icons/bs";
import { FaMinusCircle } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
import { TbWritingSign, TbWritingSignOff } from "react-icons/tb";
import useEsgobservabilitydemoEsgobservabilitydemo from "../hooks/useEsgobservabilitydemoEsgobservabilitydemo";
import { convertToNumber, incrementStringNumber } from "../utils/library";

export default function Traceability() {
  const [Sign1, setSign1] = useState(true);
  const [Sign2, setSign2] = useState(false);

  // latest reset index values for Raw Material Extraction, Material Processing, Manufacturing and Transportation respectively
  const [latestIndexes, setLatestIndexes] = useState(["0", "0", "0", "0"]);

  const hookOptions = {
    // ... other options
    refetchInterval: 2000, // Revalidate every 2 seconds
  };
  const perPage = 100;

  const {
    QueryManufacturingAll,
    QueryTransportationAll,
    QueryMaterialProcessingAll,
    QueryRawMaterialExtractionAll,
    QueryManufacturing,
    QueryMaterialProcessing,
    QueryRawMaterialExtraction,
    QueryTransportation,
  } = useEsgobservabilitydemoEsgobservabilitydemo();

  const rawMaterialAll = QueryRawMaterialExtractionAll(
    { "pagination.limit": perPage, "pagination.offset": 0, "pagination.count_total": true, "pagination.reverse": true },
    hookOptions,
    perPage,
  );

  const rawMaterialLatest = rawMaterialAll?.data?.pages?.[0]?.pagination?.total || "0";

  const {
    data: rawMaterialLatestData,
    error: rawMaterialLatestErro,
    isError: rawMaterialLatestIsError,
    isLoading: rawMaterialLatestIsLoading,
  } = QueryRawMaterialExtraction(latestIndexes?.[0]?.toString?.(), hookOptions);

  const materialProcessingAll = QueryMaterialProcessingAll(
    { "pagination.limit": 100, "pagination.offset": 0, "pagination.count_total": false, "pagination.reverse": true },
    hookOptions,
    perPage,
  );

  const materialProcessingLatest = materialProcessingAll?.data?.pages?.[0]?.pagination?.total || "0";

  const {
    data: materialProcessingLatestData,
    error: materialProcessingLatestError,
    isError: materialProcessingLatestIsError,
    isLoading: materialProcessingLatestIsLoading,
  } = QueryMaterialProcessing(latestIndexes?.[1]?.toString?.(), hookOptions);

  const manufacturingAll = QueryManufacturingAll(
    { "pagination.limit": 100, "pagination.offset": 0, "pagination.count_total": true, "pagination.reverse": true },
    hookOptions,
    perPage,
  );

  const manufacturingLatest = manufacturingAll?.data?.pages?.[0]?.pagination?.total || "0";

  const {
    data: manufacturingLatestData,
    error: manufacturingLatestError,
    isError: manufacturingLatestIsError,
    isLoading: manufacturingLatestIsLoading,
  } = QueryManufacturing(latestIndexes?.[2]?.toString?.(), hookOptions);

  const transportationAll = QueryTransportationAll(
    { "pagination.limit": 100, "pagination.offset": 0, "pagination.count_total": true, "pagination.reverse": true },
    hookOptions,
    perPage,
  );

  const transportationLatest = materialProcessingAll?.data?.pages?.[0]?.pagination?.total || "0";

  const {
    data: transportationLatestData,
    error: transportationLatestError,
    isError: transportationLatestIsError,
    isLoading: transportationLatestIsLoading,
  } = QueryTransportation(latestIndexes?.[3]?.toString?.(), hookOptions);

  const handleResetFlow = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault(); // Prevents default behavior, if needed
    console.log("Button clicked!", manufacturingAll);
    console.log("rawMaterialLatest: ", rawMaterialLatest);
    console.log("materialProcessingLatest: ", materialProcessingLatest);
    console.log("manufacturingLatest: ", manufacturingLatest);
    console.log("transportationLatest: ", transportationLatest);
    setLatestIndexes([rawMaterialLatest, materialProcessingLatest, manufacturingLatest, transportationLatest]);
  };

  const step = {
    title: "Raw Material Extracting",
    hash: "asdfjakjhwnan",
    primaryKey: "asdfjakjhwnan",
    otherKey: "asdfjakjhwnan",
    state: "completed",
  };

  const DATA = {
    title: "EPD Overview",
    details: [
      "This EPD covers the environmental impact of a silver ring weighing 10.49 grams. It includes raw material extraction, manufacturing and transportation, providing detailed information on resource use, emissions, and waste, in line with relevant environmental standards.",
    ],
    StepData: [
      {
        title: "Raw Material Extracting",
        hash: "asdfjakjhwnan",
        primaryKey: "asdfjakjhwnan",
        otherKey: "asdfjakjhwnan",
        state: "completed",
      },
      {
        title: "Materials Processing",
        hash: "asdfjakjhwnan",
        primaryKey: "asdfjakjhwnan",
        otherKey: "asdfjakjhwnan",
        state: "",
      },
      {
        title: "Manufacturing",
        hash: "asdfjakjhwnan",
        primaryKey: "asdfjakjhwnan",
        otherKey: "asdfjakjhwnan",
        state: "",
      },
      {
        title: "Distribution & Transportation",
        hash: "asdfjakjhwnan",
        primaryKey: "asdfjakjhwnan",
        otherKey: "asdfjakjhwnan",
        state: "",
      },
    ],
    RatingsData: [
      {
        title: "Raw Material Extraction Stage",
        CO2value: "0.2",
        H2Ovalue: "0.2",
        point: 4,
      },
      {
        title: "Material Processing Stage",
        CO2value: "0.2",
        H2Ovalue: "0.2",
        point: 4,
      },
      {
        title: "Manufacturing Stage",
        CO2value: "0.2",
        H2Ovalue: "0.2",
        point: 4,
      },
      {
        title: "Distribution Stage",
        CO2value: "0.2",
        H2Ovalue: "0.2",
        point: 3,
      },
    ],
  };

  return (
    <div className="am-esg-signature">
      <main>
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
              
                    <p style={{ color: 'black', fontWeight: 'bold' }}>{rate?.title}</p>
                    <div className="stars">
                      <div>
                         <div><span className="rating-value" style={{ color: 'grey' }} >Carbon Emissions - {rate.CO2value} kg of CO2-equivalent</span></div>
                         <div><span className="rating-value" style={{ color: 'grey' }} >Water Use - {rate.H2Ovalue} kg of H2O</span></div>
                      </div>
                    </div>
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
            <div className={`sign ${Sign2 ? "active" : ""}`}>
              <button onClick={handleResetFlow}>Submit</button>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
