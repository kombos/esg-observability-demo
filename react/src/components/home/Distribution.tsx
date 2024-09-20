import React from "react";
import { BsFillPuzzleFill } from "react-icons/bs";
import { useClient } from "../../hooks/useClient";
import { useAddressContext } from "../../def-hooks/addressContext";

export default function Distribution() {
  const lcaClient = useClient();
  const creatorAddressObject = useAddressContext();
  const lowestEmission = 100;
  const highestEmission = 450;
  const lowestFuelUse = 0;
  const highestFuelUse = 1000;
  const stakeholder = "cosmos1arfwns32lw99z2jhlyj8cgnjd7c06yf09y8l63";

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault(); // Prevent default form submission

    // check if the user is a proper stakeholder
    if (creatorAddressObject?.address !== stakeholder) {
      alert("The User is not Authorized as Designated Stakeholder");
      return;
    }
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
  const DATA = {
    title: "Inventory Assessment",
    titleChip: (
      <>
        <BsFillPuzzleFill /> Product - Silver Ring
      </>
    ),
    processTitle: "Process",
    processValue: "5abe34df - Transportation of silver products via truck",
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
          Resources: "Diesel",
          Type: "Input",
          Unit: "L",
          Amount: 15,
          "Flow UUID": "5f123a...7b9e",
          Flow: "Diesel fuel consumption during transportation",
          "Method LCIA": "Warming Potential (GWP)",
          "Characterization Factor": "kg CO₂-equivalents per L"
        },
        {
          Resources: "Truck Transport",
          Type: "Input",
          Unit: "km",
          Amount: 120,
          "Flow UUID": "9d6afc...e7d3",
          Flow: "Transportation of silver products to distributor",
          "Method LCIA": "Warming Potential (GWP)",
          "Characterization Factor": "kg CO₂-equivalents per km"
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
