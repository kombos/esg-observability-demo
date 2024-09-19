import React from "react";
import { BsFillPuzzleFill } from "react-icons/bs";
import { useAddressContext } from "../../def-hooks/addressContext";
import { useClient } from "../../hooks/useClient";

export default function RawMaterial() {
  const lcaClient = useClient();
  const creatorAddressObject = useAddressContext();
  const lowestEmission = 100;
  const highestEmission = 450;
  const lowestWaterUse = 0;
  const highestWaterUse = 100;
  const stakeholder = "cosmos199sfwptd2u7tq8gu5gqrsj47qlf5u9s7qqnfht";

  // Handle form submit
  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault(); // Prevent default form submission
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

  const DATA = {
    title: "Inventory Assessment",
    titleChip: (
      <>
        <BsFillPuzzleFill /> Product/Service - Shirt, Medium Size
      </>
    ),
    processTitle: "Process",
    processValue: "1b32feca67 - Cotton Fibre, organic ginning mass -0.9kg",
    metaData: {
      title: "Process Metadata",
      objects: [
        {
          title: "Product Category",
          value: "Textile",
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
          Resources: "Cotton",
          Type: "Input",
          Unit: "kg",
          Amount: "234",
          "Flow UUID": "1181f5...43a5",
          Flow: "(3-(sec...benzene",
          "Method LCIA": "Warming...(GWP)",
          "Characterization Factor": "kg CO₂-equivalents per kWh",
        },
        {
          Resources: "Silk",
          Type: "Input",
          Unit: "kg",
          Amount: "35",
          "Flow UUID": "1181f5...43a5",
          Flow: "graining silk",
          "Method LCIA": "Warming...(GWP)",
          "Characterization Factor": "kg CO₂-equivalents per kWh",
        },
        {
          Resources: "Refined Cotton",
          Type: "Output",
          Unit: "kg",
          Amount: "220",
          "Flow UUID": "1181f5...43a5",
          Flow: "cotton...ating",
          "Method LCIA": "Eutrophication",
          "Characterization Factor": "AQUATIC_EUTROPHICATION",
        },
        {
          Resources: "Crude Oil",
          Type: "Output",
          Unit: "Litre",
          Amount: "45",
          "Flow UUID": "1181f5...43a5",
          Flow: "cotton...cessing",
          "Method LCIA": "Warming...(GWP)",
          "Characterization Factor": "kg CO₂-equivalents per kWh",
        },
      ],
    },
    emissions: {
      title: "Emissions",
      tableKeys: ["LCIAMethod_uuid EF3.1", "LCIAMethod_name", "LCIAMethod_type", "LCIAMethod_impactIndicator"],
      objects: [
        {
          "LCIAMethod_uuid EF3.1": "1181f5...43a5",
          LCIAMethod_name: "Climate change-Fossil",
          LCIAMethod_type: "MID_POINT_INDICATOR",
          LCIAMethod_impactIndicator: "Radiative forcing as Global Warming Potential (GWP100)",
        },
        {
          "LCIAMethod_uuid EF3.1": "1181f5...43a5",
          LCIAMethod_name: "Ecotoxicity, freshwater",
          LCIAMethod_type: "MID_POINT_INDICATOR",
          LCIAMethod_impactIndicator: "Comparative Toxic Unit for ecosystems (CTUe)",
        },
        {
          "LCIAMethod_uuid EF3.1": "1181f5...43a5",
          LCIAMethod_name: "EF-particulate matter",
          LCIAMethod_type: "MID_POINT_INDICATOR",
          LCIAMethod_impactIndicator: "Impact on human health",
        },
        {
          "LCIAMethod_uuid EF3.1": "1181f5...43a5",
          LCIAMethod_name: "Resource use, minerals and metals",
          LCIAMethod_type: "MID_POINT_INDICATOR",
          LCIAMethod_impactIndicator: "Abiotic resource depletion (ADP ultimate reserve)",
        },
      ],
    },
    co_product: {
      title: "Co Products",
      products: ["Cotton Threads", "Silk Threads", "Cotton Dye"],
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
