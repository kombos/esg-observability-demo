/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { BsFillStarFill } from "react-icons/bs";
import IgntAssets from "../components/IgntAssets";
import IgntTransactions from "../components/IgntTransactions";
import IgntTransfer from "../components/IgntTransfer";
import { useAddressContext } from "../def-hooks/addressContext";
import { useClient } from "../hooks/useClient";
import useEsgobservabilitydemoEsgobservabilitydemo from "../hooks/useEsgobservabilitydemoEsgobservabilitydemo";
import React from "react";

export default function ProductQR() {
  const lcaClient = useClient();
  const creatorAddressObject = useAddressContext();
  const lowestEmission = 100;
  const highestEmission = 450;
  const lowestWaterUse = 0;
  const highestWaterUse = 100;
  const lowestFuelUse = 0;
  const highestFuelUse = 1000;

  const hookOptions = {
    // ... other options
    refetchInterval: 2000, // Revalidate every 2 seconds
  };
  const perPage = 100;

  const { QueryManufacturingAll, QueryTransportationAll, QueryMaterialProcessingAll, QueryRawMaterialExtractionAll } =
    useEsgobservabilitydemoEsgobservabilitydemo();

  const rawMaterialAll = QueryRawMaterialExtractionAll(
    { "pagination.limit": 100, "pagination.offset": 0, "pagination.count_total": true, "pagination.reverse": true },
    hookOptions,
    perPage,
  );

  const materialProcessingAll = QueryMaterialProcessingAll(
    { "pagination.limit": 100, "pagination.offset": 0, "pagination.count_total": true, "pagination.reverse": true },
    hookOptions,
    perPage,
  );

  const manufacturingAll = QueryManufacturingAll(
    { "pagination.limit": 100, "pagination.offset": 0, "pagination.count_total": true, "pagination.reverse": true },
    hookOptions,
    perPage,
  );

  const transportationAll = QueryTransportationAll(
    { "pagination.limit": 100, "pagination.offset": 0, "pagination.count_total": true, "pagination.reverse": true },
    hookOptions,
    perPage,
  );

  // Handle form submit
  const handleSubmitRawMaterials = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault(); // Prevent default form submission
    console.log("Form submitted with input:");
    // generate random values for emission and water use
    const randomEmission = Math.random() * (highestEmission - lowestEmission) + lowestEmission;
    const randomWaterUse = Math.random() * (highestWaterUse - lowestWaterUse) + lowestWaterUse;

    // create transaction to create raw material data
    try {
      const tx_result = await lcaClient.EsgobservabilitydemoEsgobservabilitydemo.tx.sendMsgCreateRawMaterialExtraction({
        value: {
          creator: creatorAddressObject?.address,
          emissions: randomEmission?.toString(),
          resourceType: "Silver",
          waterUse: randomWaterUse?.toString(),
        },
        fee: {
          amount: [{ amount: "0", denom: "stake" }],
          gas: "200000",
        },
        memo: "",
      });
      alert("Transaction Submitted. Wait for confirmation");
    } catch (error) {
      console.error("Error during handle submit: ", error);
    }
  };

  const handleSubmitMaterialProcessing = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault(); // Prevent default form submission
    console.log("Form submitted with input:");
    // generate random values for emission and water use
    const randomEmission = Math.random() * (highestEmission - lowestEmission) + lowestEmission;
    const randomWaterUse = Math.random() * (highestWaterUse - lowestWaterUse) + lowestWaterUse;

    const value = {
      creator: creatorAddressObject?.address,
      emissions: randomEmission?.toString(),
      materialType: "Refined Silver",
      waterUse: randomWaterUse?.toString(),
    };

    console.log("vlue: ", value);

    // create transaction to create material processing data
    try {
      const tx_result = await lcaClient.EsgobservabilitydemoEsgobservabilitydemo.tx.sendMsgCreateMaterialProcessing({
        value: {
          creator: creatorAddressObject?.address,
          emissions: randomEmission?.toString(),
          materialType: "Refined Silver",
          waterUse: randomWaterUse?.toString(),
        },
        fee: {
          amount: [{ amount: "0", denom: "stake" }],
          gas: "200000",
        },
        memo: "",
      });
      alert("Transaction Submitted. Wait for confirmation");
    } catch (error) {
      console.error("Error during handle submit: ", error);
    }
  };

  const handleSubmitManufacturing = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault(); // Prevent default form submission
    console.log("Form submitted with input:");
    // generate random values for emission and water use
    const randomEmission = Math.random() * (highestEmission - lowestEmission) + lowestEmission;
    const randomWaterUse = Math.random() * (highestWaterUse - lowestWaterUse) + lowestWaterUse;

    // create transaction to create manufacturing data
    try {
      const tx_result = await lcaClient.EsgobservabilitydemoEsgobservabilitydemo.tx.sendMsgCreateManufacturing({
        value: {
          creator: creatorAddressObject?.address,
          emissions: randomEmission?.toString(),
          componentType: "Refined Silver",
          waterUse: randomWaterUse?.toString(),
        },
        fee: {
          amount: [{ amount: "0", denom: "stake" }],
          gas: "200000",
        },
        memo: "",
      });
      alert("Transaction Submitted. Wait for confirmation");
    } catch (error) {
      console.error("Error during handle submit: ", error);
    }
  };

  const handleSubmitTransportation = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault(); // Prevent default form submission
    console.log("Form submitted with input:");
    // generate random values for emission and water use
    const randomEmission = Math.random() * (highestEmission - lowestEmission) + lowestEmission;
    const fuelUse = Math.random() * (highestFuelUse - lowestFuelUse) + lowestFuelUse;

    // create transaction to create transportation data
    try {
      const tx_result = await lcaClient.EsgobservabilitydemoEsgobservabilitydemo.tx.sendMsgCreateTransportation({
        value: {
          creator: creatorAddressObject?.address,
          emissions: randomEmission?.toString(),
          transportationType: "Refined Silver",
          fuelUse: fuelUse?.toString(),
        },
        fee: {
          amount: [{ amount: "0", denom: "stake" }],
          gas: "200000",
        },
        memo: "",
      });
      alert("Transaction Submitted. Wait for confirmation");
    } catch (error) {
      console.error("Error during handle submit: ", error);
    }
  };

  const RatingsData = [
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
  ];

  return (
    <main className="am-esg-product-qr">
      <div className="left">
        <img src="/media/table.png" alt="table" />
      </div>
      <div className="right">
        <div className="logo">
          <img src="/media/logo.png" alt="EY Logo" />
        </div>
        <div className="ratings">
          {RatingsData &&
            Array.isArray(RatingsData) &&
            RatingsData.length > 0 &&
            React.Children.toArray(
              RatingsData.map((rate) => (
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
        <div className="table-image">
          <img src="/media/table-2.png" alt="table" />
        </div>
      </div>
    </main>
  );
}
