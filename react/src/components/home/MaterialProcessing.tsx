import React from "react";
import { BsFillPuzzleFill } from "react-icons/bs";
import { useAddressContext } from "../../def-hooks/addressContext";
import { useClient } from "../../hooks/useClient";
import { highestEmission, highestWaterUse, lowestEmission, lowestWaterUse } from "../../utils/library";


export default function MaterialProcessing() {
  const lcaClient = useClient();
  const creatorAddressObject = useAddressContext();
  const stakeholder = "cosmos1w466p2wdddds96zgrjwlgm7nef3q84z7uyyf4c";

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault(); // Prevent default form submission

    // check if the user is a proper stakeholder
    if (creatorAddressObject?.address !== stakeholder) {
      alert("The User is not Authorized as Designated Stakeholder");
      return;
    }
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

  const DATA = {
    title: "Inventory Assessment",
    titleChip: (
      <>
        <BsFillPuzzleFill /> Product - Silver Ring
      </>
    ),
    processTitle: "Process",
    processValue: "144f3ffd7 - Silver; concentration, roasting, refining; production mix, at plant; 10.49 g/cm3",
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
          Amount: "12.3",
          "Flow UUID": "12dwe3...43a5",
          Flow: "Silver smelting and refining",
          "Method LCIA": "Warming Potential (GWP)",
          "Characterization Factor": "kg CO₂-equivalents per kg"
        },
        {
          Resources: "Refined Silver",
          Type: "Output",
          Unit: "g",
          Amount: "8.12",  
          "Flow UUID": "34435f...cew35",
          Flow: "Silver refining",
          "Method LCIA": "Warming Potential (GWP)",
          "Characterization Factor": "kg CO₂-equivalents per kg"
        },
        {
          Resources: "Copper",
          Type: "Input",
          Unit: "g",
          Amount: "2.1",  
          "Flow UUID": "1ewd23...4ed5",
          Flow: "Alloying",
          "Method LCIA": "Eutrophication",
          "Characterization Factor": "kg CO₂-equivalents per kg"
        },
        {
          Resources: "Electricity",
          Type: "Input",
          Unit: "kWh",
          Amount: 100,
          "Flow UUID": "45tg45...4fer5",
          Flow: "Electricity consumption during smelting",
          "Method LCIA": "Warming Potential (GWP)",
          "Characterization Factor": "kg CO₂-equivalents per kWh"
        },
        {
          Resources: "Water",
          Type: "Input",
          Unit: "m3",
          Amount: 25,
          "Flow UUID": "23r34f5...3r2tg",
          Flow: "Cooling and refining processes",
          "Method LCIA": "Water Consumption",
          "Characterization Factor": "m³ per kg silver processed"
        },
        {
          Resources: "Sulfur Dioxide",
          Type: "Output",
          Unit: "g",
          Amount: 1.3,
          "Flow UUID": "1erf4f5...44df3",
          Flow: "Emissions from smelting",
          "Method LCIA": "Acidification",
          "Characterization Factor": "kg SO₂-equivalents"
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
    }
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
        <button onClick={handleSubmit} disabled={!creatorAddressObject?.address}>Submit</button>
      </div>
    </div>
  );
}
