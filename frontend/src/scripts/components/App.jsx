import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import routes from "../routes/routes.js";
import ScrollToTop from "./ScrollToTop.jsx";

const App = () => (
  <Router>
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <ScrollToTop />
      <div className="flex-1">
        <Routes>
          {Object.entries(routes).map(([path, Component]) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>
);

export default App;
