import "@ignt/react-library/dist/style.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import AddressProvider from "./def-hooks/addressContext";
import router from "./router";
import "./styles/index.scss";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DenomProvider from "./def-hooks/denomContext";
import { ResetStateProvider } from "./def-hooks/ResetStateContext";
import WalletProvider from "./def-hooks/walletContext";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AddressProvider>
        <WalletProvider>
          <DenomProvider>
            <ResetStateProvider>
              <RouterProvider router={router} />
            </ResetStateProvider>
          </DenomProvider>
        </WalletProvider>
      </AddressProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
