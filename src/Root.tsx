/* eslint-disable global-require */
import { StyledEngineProvider } from "@mui/material/styles";
import { FC, useEffect } from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import { initSandigoSDK } from "sandigo-sdk";
import App from "src/App";
import { Environment } from "src/helpers/environment/Environment/Environment";
import { wagmiClient } from "src/hooks/wagmi";
import { ReactQueryProvider } from "src/lib/react-query";
import store from "src/store";
import { WagmiConfig } from "wagmi";

const Root: FC = () => {
  useEffect(() => {
    initSandigoSDK(true, Environment.getSandigoDomain()).deploy(window);
  });
  return (
    <WagmiConfig client={wagmiClient}>
      <ReactQueryProvider>
        <Provider store={store}>
          <HashRouter>
            <StyledEngineProvider injectFirst>
              <App />
            </StyledEngineProvider>
          </HashRouter>
        </Provider>
      </ReactQueryProvider>
    </WagmiConfig>
  );
};

export default Root;
