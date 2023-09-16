import React from "react";
import App from "./App";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Contact from "./Pages/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TermsConditions from "./Components/TermsCondition";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import ServicePolicy from "./Components/ServicePolicy";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/termsCondition" element={<TermsConditions/>}/>
        <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
        
        <Route path="/service-policy" element={<ServicePolicy/>}/>

        {/* <Route path="/terms-and-conditions" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />}  />
        <Route path="/service-policy" element={<ServicePolicy />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
