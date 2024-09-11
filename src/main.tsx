import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store/store.ts";
import Banner from "./molecules/Banner.tsx";
import Header from "./molecules/Header.tsx";
import SubHeading from "./molecules/SubHeading.tsx";
import { PersistGate } from "redux-persist/integration/react";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Banner />
        <Header />
        <SubHeading />
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>
);
