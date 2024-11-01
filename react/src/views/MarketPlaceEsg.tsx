/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import { StarRating } from "../components/StarRating";
import { useResetState } from "../def-hooks/ResetStateContext";
import useEsgobservabilitydemoEsgobservabilitydemo from "../hooks/useEsgobservabilitydemoEsgobservabilitydemo";
import {
  getAverageValue,
  getEmissionBenchmark,
  getFuelUseBenchmark,
  getWaterUseBenchmark,
  hookOptions,
  perPage,
} from "../utils/library";
import Revealer from "../components/marketplace/Revealer";

export default function MarketPlaceEsg() {
  const { QueryManufacturingAll, QueryTransportationAll, QueryMaterialProcessingAll, QueryRawMaterialExtractionAll } =
    useEsgobservabilitydemoEsgobservabilitydemo();
  const { resetState: latestIndexes } = useResetState();

  const rawMaterialAll = QueryRawMaterialExtractionAll(
    { "pagination.limit": 100, "pagination.offset": 0, "pagination.count_total": true, "pagination.reverse": false },
    hookOptions,
    perPage,
  );

  const materialProcessingAll = QueryMaterialProcessingAll(
    { "pagination.limit": 100, "pagination.offset": 0, "pagination.count_total": true, "pagination.reverse": false },
    hookOptions,
    perPage,
  );

  const manufacturingAll = QueryManufacturingAll(
    { "pagination.limit": 100, "pagination.offset": 0, "pagination.count_total": true, "pagination.reverse": false },
    hookOptions,
    perPage,
  );

  const transportationAll = QueryTransportationAll(
    { "pagination.limit": 100, "pagination.offset": 0, "pagination.count_total": true, "pagination.reverse": false },
    hookOptions,
    perPage,
  );

  const rawMaterialLatestIndex = isNaN(Number(latestIndexes[0])) ? 0 : Number(latestIndexes[0]);
  const rawMaterialLatestValue =
    rawMaterialAll?.data?.pages?.[0]?.RawMaterialExtraction?.[rawMaterialLatestIndex] || {};

  const materialProcessingLatestIndex = isNaN(Number(latestIndexes[1])) ? 0 : Number(latestIndexes[1]);
  const materialProcessingLatestValue =
    materialProcessingAll?.data?.pages?.[0]?.MaterialProcessing?.[materialProcessingLatestIndex] || {};

  const manufacturingLatestIndex = isNaN(Number(latestIndexes[2])) ? 0 : Number(latestIndexes[2]);
  const manufacturingLatestValue = manufacturingAll?.data?.pages?.[0]?.Manufacturing?.[manufacturingLatestIndex] || {};

  const transportationLatestIndex = isNaN(Number(latestIndexes[3])) ? 0 : Number(latestIndexes[3]);
  const transportationLatestValue =
    transportationAll?.data?.pages?.[0]?.Transportation?.[transportationLatestIndex] || {};

  const isAllTraced =
    rawMaterialLatestValue?.id &&
    materialProcessingLatestValue?.id &&
    manufacturingLatestValue?.id &&
    transportationLatestValue?.id
      ? true
      : false;

  const averageEmissions = getAverageValue([
    rawMaterialLatestValue?.emissions,
    materialProcessingLatestValue?.emissions,
    manufacturingLatestValue?.emissions,
    transportationLatestValue?.emissions,
  ]);

  const averageWaterUse = getAverageValue([
    rawMaterialLatestValue?.waterUse,
    materialProcessingLatestValue?.waterUse,
    manufacturingLatestValue?.waterUse,
  ]);

  const averageFuelUse = transportationLatestValue?.fuelUse || "0";

  const RatingsData = [
    {
      title: "Overall Emissions: ",
      point: getEmissionBenchmark(averageEmissions),
    },
    {
      title: "Overall Water Use: ",
      point: getWaterUseBenchmark(averageWaterUse),
    },
    {
      title: "Overall Fuel Use: ",
      point: getFuelUseBenchmark(averageFuelUse),
    },
  ];

  console.log("averageEmissions: ", [
    rawMaterialLatestValue?.emissions,
    materialProcessingLatestValue?.emissions,
    manufacturingLatestValue?.emissions,
    transportationLatestValue?.emissions,
  ]);

  return (
    isAllTraced && (
      <Revealer summary={<strong>ESG Ratings</strong>} openByDefault>
        <main className="am-esg-product-qr">
          <div className="right">
            <div className="logo">
              {/* <img src="/media/logo.png" alt="EY Logo" /> */}
              <strong>ESG Observability</strong>
            </div>
            <div className="ratings">
              {RatingsData &&
                Array.isArray(RatingsData) &&
                RatingsData.length > 0 &&
                React.Children.toArray(
                  RatingsData.map((rate) => (
                    <div className="rating">
                      <p>{rate?.title}</p>
                      <StarRating rating={rate?.point} />
                    </div>
                  )),
                )}
            </div>
          </div>
        </main>
      </Revealer>
    )
  );
}
