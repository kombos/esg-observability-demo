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

    // check if the user is a proper stakeholder
    if (creatorAddressObject?.address !== stakeholder) {
      alert("The User is not Authorized as Designated Stakeholder");
      return;
    }
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
        <BsFillPuzzleFill /> Product - Silver Ring
      </>
    ),
    processTitle: "Process",
    processValue: "a28acad1 - Silver; mining - 10.49 g/cm3",
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
          "Flow UUID": "1181f5...43a5",
          Flow: "Silver, mining",
          "Method LCIA": "Resource use, minerals and metals",
          "Characterization Factor": "kg CO₂-equivalents per kg",
        },
        {
          Resources: "Copper",
          Type: "Input",
          Unit: "g",
          Amount: "2.1",
          "Flow UUID": "01500nb...63ff",
          Flow: "Copper, mining",
          "Method LCIA": "Resource use, minerals and metals",
          "Characterization Factor": "kg CO₂-equivalents per kg",
        },
        {
          Resources: "Water",
          Type: "Input",
          Unit: "m3",
          Amount: "0.0125",
          "Flow UUID": "16hjd5...78ae0",
          Flow: "Water Use",
          "Method LCIA": "Resources from water",
          "Characterization Factor": "m³ per kg silver processed",
        },
        {
          Resources: "Deisel",
          Type: "Input",
          Unit: "m3",
          Amount: "0.00875",
          "Flow UUID": "2k1f5...423kl5",
          Flow: "Deisel use for transportation",
          "Method LCIA": "Resources from land",
          "Characterization Factor": "kg CO₂-equivalents per kg",
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
        <button onClick={handleSubmit} disabled={!creatorAddressObject?.address}>Submit</button>
      </div>
    </div>
  );
}
