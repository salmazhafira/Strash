import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import routes from "./routes/routes.js";
import ScrollToTop from "./components/ScrollToTop.jsx";

const App = () => (
  <Router>
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <ScrollToTop />
      <section className="flex-1">
        <Routes>
          {Object.entries(routes).map(([path, Component]) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </section>
      <Footer />
    </main>
  </Router>
);

export default App;
