/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import IgntAssets from "../components/IgntAssets";
import IgntTransactions from "../components/IgntTransactions";
import IgntTransfer from "../components/IgntTransfer";
import { useAddressContext } from "../def-hooks/addressContext";
import { useClient } from "../hooks/useClient";
import useEsgobservabilitydemoEsgobservabilitydemo from "../hooks/useEsgobservabilitydemoEsgobservabilitydemo";

export default function StoreFront() {
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

  console.log("rawMaterialAll: ", rawMaterialAll);

  return (
    <div>
      <div className="container mx-auto">
        <div className="grid grid-cols-2">
          <div>
            <IgntAssets className="px-2.5 mb-10" displayLimit={3} />
            <IgntTransactions className="px-2.5" />
            <div>
              <div>
                <label htmlFor="textbox1">Textbox 1:</label>
                <input type="text" id="textbox1" name="textbox1" />
              </div>
              <div>
                <label htmlFor="textbox2">Textbox 2:</label>
                <input type="text" id="textbox2" name="textbox2" />
              </div>
              <div>
                <label htmlFor="textbox3">Textbox 3:</label>
                <input type="text" id="textbox3" name="textbox3" />
              </div>
              <div>
                <label htmlFor="textbox4">Textbox 4:</label>
                <input type="text" id="textbox4" name="textbox4" />
              </div>
            </div>
            <div>
              <div>
                <button onClick={(e) => handleSubmitRawMaterials(e)}>Submit Raw Materials</button>
              </div>
              <div>
                <button onClick={(e) => handleSubmitMaterialProcessing(e)}>Submit Material Processing</button>
              </div>
              <div>
                <button onClick={(e) => handleSubmitManufacturing(e)}>Submit Manufacturing</button>
              </div>
              <div>
                <button onClick={(e) => handleSubmitTransportation(e)}>Submit Transportation</button>
              </div>
            </div>
          </div>
          <IgntTransfer className="px-2.5 w-4/6 mx-auto" />
        </div>
      </div>
    </div>
  );
}
