import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import EntryPage from "./pages/EntryPage";

// Softepy Pages
import SoftepyHome from "./pages/Softepy/Home";
import SoftepyAbout from "./pages/Softepy/AboutUs";
import SoftepyProduct from "./pages/Softepy/Product";
import SoftepyFranchise from "./pages/Softepy/Franchise";
import SoftepyLocation from "./pages/Softepy/Location";

// Pulpepy Pages
import PulpepyHome from "./pages/Pulpepy/Home";
import PulpepyAbout from "./pages/Pulpepy/AboutUs";
import PulpepyProduct from "./pages/Pulpepy/Product";
import PulpepyFranchise from "./pages/Pulpepy/Franchise";
import PulpepyLocation from "./pages/Pulpepy/Location";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EntryPage />} />

        {/* Softepy */}
        <Route path="/softepy/home" element={<SoftepyHome />} />
        <Route path="/softepy/about" element={<SoftepyAbout />} />
        <Route path="/softepy/product" element={<SoftepyProduct />} />
        <Route path="/softepy/franchise" element={<SoftepyFranchise />} />
        <Route path="/softepy/location" element={<SoftepyLocation />} />

        {/* Pulpepy */}
        <Route path="/pulpepy/home" element={<PulpepyHome />} />
        <Route path="/pulpepy/about" element={<PulpepyAbout />} />
        <Route path="/pulpepy/product" element={<PulpepyProduct />} />
        <Route path="/pulpepy/franchise" element={<PulpepyFranchise />} />
        <Route path="/pulpepy/location" element={<PulpepyLocation />} />
      </Routes>
    </Router>
  );
}

export default App;
