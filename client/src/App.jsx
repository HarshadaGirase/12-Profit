import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "./component/loader/Loader";

// Lazy load components
const Home = lazy(() => import("./views/pages/HomePage"));
const AboutUs = lazy(() => import("./views/pages/AboutusPage"));
const MainInvestForm = lazy(() =>
  import("./views/InvestmentForm/MainInvestForm")
);

const AdminPanel = lazy(() => import("./views/pages/AdminPanelPage"));

function App() {
  useEffect(() => {
    AOS.init({ duration: 100 }); // Initialize with a default animation duration
  }, []);
  return (
    <div>
      <Router>
        {/* Suspense provides a fallback while lazy-loaded components are being loaded */}
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/invest/:plan" element={<MainInvestForm />} />
            <Route path="admin_panel" element={<AdminPanel />} />
          </Routes>
          <ToastContainer />
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
