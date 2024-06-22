import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "primeicons/primeicons.css";
import { PrimeReactProvider } from "primereact/api";
import { store } from "@/libs/stores/store"
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <PrimeReactProvider>
            <Provider store={store}>
                <App />
            </Provider>
        </PrimeReactProvider>
    </React.StrictMode>,
);
