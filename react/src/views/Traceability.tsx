/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import { FaMinusCircle } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
import { TbWritingSign, TbWritingSignOff } from "react-icons/tb";
import { StarRating } from "../components/StarRating";
import useEsgobservabilitydemoEsgobservabilitydemo from "../hooks/useEsgobservabilitydemoEsgobservabilitydemo";
import { getEmissionBenchmark, getFuelUseBenchmark, getObjectHash, getWaterUseBenchmark } from "../utils/library";

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

  const { QueryManufacturingAll, QueryTransportationAll, QueryMaterialProcessingAll, QueryRawMaterialExtractionAll } =
    useEsgobservabilitydemoEsgobservabilitydemo();

  const rawMaterialAll = QueryRawMaterialExtractionAll(
    {
      "pagination.limit": perPage,
      "pagination.offset": 0,
      "pagination.count_total": true,
      "pagination.reverse": false,
    },
    hookOptions,
    perPage,
  );

  const rawMaterialLatestCount = rawMaterialAll?.data?.pages?.[0]?.pagination?.total || "0";
  const rawMaterialLatestIndex = isNaN(Number(latestIndexes[0])) ? 0 : Number(latestIndexes[0]);
  const rawMaterialLatestValue =
    rawMaterialAll?.data?.pages?.[0]?.RawMaterialExtraction?.[rawMaterialLatestIndex] || {};

  const materialProcessingAll = QueryMaterialProcessingAll(
    { "pagination.limit": 100, "pagination.offset": 0, "pagination.count_total": false, "pagination.reverse": false },
    hookOptions,
    perPage,
  );

  const materialProcessingLatestCount = materialProcessingAll?.data?.pages?.[0]?.pagination?.total || "0";
  const materialProcessingLatestIndex = isNaN(Number(latestIndexes[1])) ? 0 : Number(latestIndexes[1]);
  const materialProcessingLatestValue =
    materialProcessingAll?.data?.pages?.[0]?.MaterialProcessing?.[materialProcessingLatestIndex] || {};

  const manufacturingAll = QueryManufacturingAll(
    { "pagination.limit": 100, "pagination.offset": 0, "pagination.count_total": true, "pagination.reverse": false },
    hookOptions,
    perPage,
  );

  const manufacturingLatestCount = manufacturingAll?.data?.pages?.[0]?.pagination?.total || "0";
  const manufacturingLatestIndex = isNaN(Number(latestIndexes[2])) ? 0 : Number(latestIndexes[2]);
  const manufacturingLatestValue = manufacturingAll?.data?.pages?.[0]?.Manufacturing?.[manufacturingLatestIndex] || {};

  const transportationAll = QueryTransportationAll(
    { "pagination.limit": 100, "pagination.offset": 0, "pagination.count_total": true, "pagination.reverse": false },
    hookOptions,
    perPage,
  );

  const transportationLatestCount = transportationAll?.data?.pages?.[0]?.pagination?.total || "0";
  const transportationLatestIndex = isNaN(Number(latestIndexes[3])) ? 0 : Number(latestIndexes[3]);
  const transportationLatestValue =
    transportationAll?.data?.pages?.[0]?.Transportation?.[transportationLatestIndex] || {};

  const handleResetFlow = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault(); // Prevents default behavior, if needed
    console.log("Button clicked!", manufacturingAll);
    setLatestIndexes([
      rawMaterialLatestCount,
      materialProcessingLatestCount,
      manufacturingLatestCount,
      transportationLatestCount,
    ]);
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
        hash: getObjectHash(rawMaterialLatestValue, 16),
        id: rawMaterialLatestValue?.id || "0",
        creator: rawMaterialLatestValue?.creator || "Not Attested",
        state: rawMaterialLatestValue?.id ? true : false,
      },
      {
        title: "Material Processing",
        hash: getObjectHash(materialProcessingLatestValue, 16),
        id: materialProcessingLatestValue?.id || "0",
        creator: materialProcessingLatestValue?.creator || "Not Attested",
        state: materialProcessingLatestValue?.id ? true : false,
      },
      {
        title: "Manufacturing",
        hash: getObjectHash(manufacturingLatestValue, 16),
        id: manufacturingLatestValue?.id || "0",
        creator: manufacturingLatestValue?.creator || "Not Attested",
        state: manufacturingLatestValue?.id ? true : false,
      },
      {
        title: "Distribution & Transportation",
        hash: getObjectHash(transportationLatestValue, 16),
        id: transportationLatestValue?.id || "0",
        creator: transportationLatestValue?.creator || "Not Attested",
        state: transportationLatestValue?.id ? true : false,
      },
    ],
    RatingsData: [
      {
        title: "Raw Material Extraction Stage",
        CO2value: rawMaterialLatestValue?.emissions || "0.0000",
        H2Ovalue: rawMaterialLatestValue?.waterUse || "0.0000",
        emissionPoint: rawMaterialLatestValue?.emissions ? getEmissionBenchmark(rawMaterialLatestValue?.emissions) : 0,
        waterUsePoint: rawMaterialLatestValue?.waterUse ? getWaterUseBenchmark(rawMaterialLatestValue?.waterUse) : 0,
        isTraced: rawMaterialLatestValue?.id ? true : false,
      },
      {
        title: "Material Processing Stage",
        CO2value: materialProcessingLatestValue?.emissions || "0.0000",
        H2Ovalue: materialProcessingLatestValue?.waterUse || "0.0000",
        emissionPoint: materialProcessingLatestValue?.emissions
          ? getEmissionBenchmark(materialProcessingLatestValue?.emissions)
          : 0,
        waterUsePoint: materialProcessingLatestValue?.waterUse
          ? getWaterUseBenchmark(materialProcessingLatestValue?.waterUse)
          : 0,
        isTraced: materialProcessingLatestValue?.id ? true : false,
      },
      {
        title: "Manufacturing Stage",
        CO2value: manufacturingLatestValue?.emissions || "0.0000",
        H2Ovalue: manufacturingLatestValue?.waterUse || "0.0000",
        emissionPoint: manufacturingLatestValue?.emissions
          ? getEmissionBenchmark(manufacturingLatestValue?.emissions)
          : 0,
        waterUsePoint: manufacturingLatestValue?.waterUse
          ? getWaterUseBenchmark(manufacturingLatestValue?.waterUse)
          : 0,
        isTraced: manufacturingLatestValue?.id ? true : false,
      },
    ],
  };

  const transportationRatingsData = {
    title: "Distribution & Transportation Stage",
    CO2value: transportationLatestValue?.emissions || "0.0000",
    fuelValue: transportationLatestValue?.fuelUse || "0.0000",
    emissionPoint: transportationLatestValue?.emissions
      ? getEmissionBenchmark(transportationLatestValue?.emissions)
      : 0,
    fuelUsePoint: transportationLatestValue?.fuelUse ? getFuelUseBenchmark(transportationLatestValue?.fuelUse) : 0,
    isTraced: transportationLatestValue?.id ? true : false,
  };

  const transportationEPDJSX = transportationRatingsData?.isTraced && (
    <div className="rating">
      <p style={{ color: "black", fontWeight: "bold" }}>{transportationRatingsData?.title}</p>
      <div className="stars">
        <div>
          <div>
            <span className="rating-value" style={{ color: "grey" }}>
              Carbon Emissions - {transportationRatingsData?.CO2value} kg CO2
            </span>
          </div>
          <StarRating rating={transportationRatingsData?.emissionPoint} />
          <div>
            <span className="rating-value" style={{ color: "grey" }}>
              Fuel Use - {transportationRatingsData?.fuelValue} kg
            </span>
          </div>
          <StarRating rating={transportationRatingsData?.fuelUsePoint} />
        </div>
      </div>
    </div>
  );

  const isAllTraced = DATA.RatingsData.every((rating) => rating.isTraced) && transportationRatingsData.isTraced;

  return (
    <div className="am-esg-signature">
      <main>
        {DATA?.StepData &&
          Array.isArray(DATA?.StepData) &&
          DATA?.StepData.length > 0 &&
          React.Children.toArray(
            DATA?.StepData.map((step) => (
              <div className="step">
                <div className={`indicator ${step?.state ? "active" : ""}`}>
                  {step?.state ? <SiTicktick className="icon" /> : <FaMinusCircle className="icon" />}
                  <span></span>
                </div>
                <div className="content">
                  <h2>{step?.title}</h2>
                  <p className="hash">Hash: {step?.hash}</p>
                  <p className="key primary">Attestation Index: {step?.id}</p>
                  <p className="key others">Attestor Key: {step?.creator}</p>
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
                DATA?.RatingsData.map(
                  (rate) =>
                    rate?.isTraced && (
                      <div className="rating">
                        <p style={{ color: "black", fontWeight: "bold" }}>{rate?.title}</p>
                        <div className="stars">
                          <div>
                            <div>
                              <span className="rating-value" style={{ color: "grey" }}>
                                Carbon Emissions - {rate?.CO2value} kg CO2
                              </span>
                            </div>
                            <StarRating rating={rate?.emissionPoint} />
                            <div>
                              <span className="rating-value" style={{ color: "grey" }}>
                                Water Use - {rate?.H2Ovalue} kg H2O
                              </span>
                            </div>
                            <StarRating rating={rate?.waterUsePoint} />
                          </div>
                        </div>
                      </div>
                    ),
                ),
              )}
            {transportationEPDJSX}
          </div>
          <div className="signs">
            <div className={`sign ${isAllTraced ? "active" : ""}`}>
              {isAllTraced ? <SiTicktick /> : <FaMinusCircle />}{" "}
              {isAllTraced ? <TbWritingSign /> : <TbWritingSignOff />}
            </div>
            <div className={`sign ${isAllTraced ? "active" : ""}`}>
              {isAllTraced ? <SiTicktick /> : <FaMinusCircle />}{" "}
              {isAllTraced ? <TbWritingSign /> : <TbWritingSignOff />}
            </div>
            <div className={`sign ${isAllTraced ? "active" : ""}`}>
              <button onClick={handleResetFlow}>Submit</button>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
