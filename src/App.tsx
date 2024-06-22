import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "@/components/HomePage/HomePage";
import DashboardPage from "./components/DashboardPage/DashboardPage";

import 'primereact/resources/themes/viva-dark/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
// import 'primeicons/primeicons.css'; //icons
// import 'primeflex/primeflex.css'; // flex

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
