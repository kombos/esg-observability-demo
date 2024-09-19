import React from "react";
import { BsFillPuzzleFill } from "react-icons/bs";
import { useClient } from "../../hooks/useClient";
import { useAddressContext } from "../../def-hooks/addressContext";

export default function Manufacturing() {
  const lcaClient = useClient();
  const creatorAddressObject = useAddressContext();
  const lowestEmission = 100;
  const highestEmission = 450;
  const lowestWaterUse = 0;
  const highestWaterUse = 100;
  const stakeholder = "cosmos1tsa8v985hqwjmhjn5hsznuyfuttcmwhekp5zpe";

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
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

  const DATA = {
    title: "Inventory Assessment",
    titleChip: (
      <>
        <BsFillPuzzleFill /> Product - Silver Ring
      </>
    ),
    processTitle: "Process",
    processValue: "1123e23fe - Silver Ring Production; casting, forging, polishing at plant; 10.49 g/cm3",
    metaData: {
      title: "Process Metadata",
      objects: [
        {
          title: "Product Category",
          value: "Jewelry and Accessories",
        },
        {
          title: "Process Type",
          value: "LCI Result",
        },
        {
          title: "Reference Year",
          value: "2019",
        },
        {
          title: "Compliance",
          value: "EF 3.0",
        },
        {
          title: "Location",
          value: "UK+EU",
        },
      ],
    },
    resources: {
      title: "Resources",
      tableKeys: ["Resources", "Type", "Unit", "Amount", "Flow UUID", "Flow", "Method LCIA", "Characterization Factor"],
      objects: [
        {
          Resources: "Silver Ore",
          Type: "Input",
          Unit: "g",
          Amount: "8.5", 
          "Flow UUID": "98234f...43a5",
          Flow: "Silver smelting and refining",
          "Method LCIA": "Warming Potential (GWP)",
          "Characterization Factor": "kg CO₂-equivalents per kg"
        },
        {
          Resources: "Refined Silver",
          Type: "Output",
          Unit: "g",
          Amount: "7.5",  
          "Flow UUID": "9af435...b43c",
          Flow: "Silver refining",
          "Method LCIA": "Warming Potential (GWP)",
          "Characterization Factor": "kg CO₂-equivalents per kg"
        },
        {
          Resources: "Copper",
          Type: "Input",
          Unit: "g",
          Amount: "1",  
          "Flow UUID": "74r2c5...d754",
          Flow: "Alloying",
          "Method LCIA": "Eutrophication",
          "Characterization Factor": "kg CO₂-equivalents per kg"
        },
        {
          Resources: "Electricity",
          Type: "Input",
          Unit: "kWh",
          Amount: 55,
          "Flow UUID": "129fe3...c5f2",
          Flow: "Electricity consumption during smelting",
          "Method LCIA": "Warming Potential (GWP)",
          "Characterization Factor": "kg CO₂-equivalents per kWh"
        },
        {
          Resources: "Water",
          Type: "Input",
          Unit: "m3",
          Amount: 12,
          "Flow UUID": "9h34f3...r4v7",
          Flow: "Cooling and refining processes",
          "Method LCIA": "Water Consumption",
          "Characterization Factor": "m³ per kg silver processed"
        },
      ],
    },
    emissions: {
      title: "Emissions",
      tableKeys: ["LCIAMethod_uuid EF3.1", "LCIAMethod_name", "LCIAMethod_type", "LCIAMethod_impactIndicator"],
      objects: [
        {
          "LCIAMethod_uuid EF3.1": "7cfdc1f...7ac8",
          LCIAMethod_name: "Climate change-Fossil",
          LCIAMethod_type: "Mid-Point-Indicator",
          LCIAMethod_impactIndicator: "Radiative forcing as Global Warming Potential (GWP100)",
        },
        {
          "LCIAMethod_uuid EF3.1": "87br8j...98jkk",
          LCIAMethod_name: "Ecotoxicity, freshwater",
          LCIAMethod_type: "Mid-Point-Indicator",
          LCIAMethod_impactIndicator: "Comparative Toxic Unit for ecosystems (CTUe)",
        },
        {
          "LCIAMethod_uuid EF3.1": "b2a8d6...ce01",
          LCIAMethod_name: "EF-particulate matter",
          LCIAMethod_type: "Mid-Point-Indicator",
          LCIAMethod_impactIndicator: "Impact on human health",
        },
        {
          "LCIAMethod_uuid EF3.1": "14af9h6...cb12",
          LCIAMethod_name: "Resource use, minerals and metals",
          LCIAMethod_type: "Mid-Point-Indicator",
          LCIAMethod_impactIndicator: "Abiotic resource depletion (ADP ultimate reserve)",
        },
      ],
    },
  };

  return (
    <div className="process-form">
      <div className="title">
        <h1>{DATA?.title}</h1>
        <div className="chip">{DATA?.titleChip}</div>
      </div>
      <div className="line"></div>

      <div className="name">{DATA?.processTitle}</div>
      <div className="value">{DATA?.processValue}</div>

      <div className="name-2">{DATA?.metaData?.title}</div>
      <div className="metadata-container">
        {DATA?.metaData?.objects &&
          Array.isArray(DATA?.metaData?.objects) &&
          DATA?.metaData?.objects?.length > 0 &&
          React.Children.toArray(
            DATA?.metaData?.objects?.map((obj) => (
              <div className="metadata">
                <h3>{obj?.title}</h3>
                <p>{obj?.value}</p>
              </div>
            )),
          )}
      </div>

      <div className="name-3">{DATA?.resources?.title}</div>
      <div className="table-container">
        <table>
          <thead>
            <tr>{React.Children.toArray(DATA?.resources?.tableKeys?.map((obj) => <th>{obj}</th>))}</tr>
          </thead>
          <tbody>
            {React.Children.toArray(
              DATA?.resources?.objects?.map((object) => (
                <tr>{React.Children.toArray(DATA?.resources?.tableKeys?.map((obj) => <td>{object[obj]}</td>))}</tr>
              )),
            )}
          </tbody>
        </table>
      </div>

      <div className="name-3">{DATA?.emissions?.title}</div>
      <div className="table-container">
        <table>
          <thead>
            <tr>{React.Children.toArray(DATA?.emissions?.tableKeys?.map((obj) => <th>{obj}</th>))}</tr>
          </thead>
          <tbody>
            {React.Children.toArray(
              DATA?.emissions?.objects?.map((object) => (
                <tr>{React.Children.toArray(DATA?.emissions?.tableKeys?.map((obj) => <td>{object[obj]}</td>))}</tr>
              )),
            )}
          </tbody>
        </table>
      </div>

      <div className="name-3">{DATA?.co_product?.title}</div>
      <ul>{React.Children.toArray(DATA?.co_product?.products?.map((li) => <li>{li}</li>))}</ul>

      <div className="buttons">
        <button onClick={handleSubmit} disabled={!(creatorAddressObject?.address == stakeholder)}>
          Submit
        </button>
      </div>
    </div>
  );
}
