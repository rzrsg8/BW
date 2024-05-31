import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import {THEME,TonConnectUIProvider } from '@tonconnect/ui-react';

import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TonConnectUIProvider manifestUrl="https://rzrsg8.github.io/jsonDemo/manifest.json"
uiPreferences={{ theme: THEME.DARK }}
     walletsListConfiguration={{
       includeWallets: [
         {
           appName: "safepalwallet",
           name: "SafePal",
           imageUrl: "https://s.pvcliping.com/web/public_image/SafePal_x288.png",
           aboutUrl: "https://www.safepal.com/download",
           jsBridgeKey: "safepalwallet",
           platforms: ["ios", "android", "chrome", "firefox"]
         },
         {
           appName: "tonwallet",
           name: "TON Wallet",
           imageUrl: "https://wallet.ton.org/assets/ui/qr-logo.png",
           aboutUrl: "https://chrome.google.com/webstore/detail/ton-wallet/nphplpgoakhhjchkkhmiggakijnkhfnd",
           universalLink: "https://wallet.ton.org/ton-connect",
           jsBridgeKey: "tonwallet",
           bridgeUrl: "https://bridge.tonapi.io/bridge",
           platforms: ["chrome", "android"]
         }
       ]
     }}
     actionsConfiguration={{
         twaReturnUrl: 'https://brainwave-ton.com/'
     }}
 >
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
  </TonConnectUIProvider>
);
