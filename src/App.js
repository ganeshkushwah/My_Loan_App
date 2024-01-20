import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./app/components/Auth/LoginForm"
import LoanRequestForm from "./app/components/LoanActivities/LoanRequestForm"
import RegistrationForm from "./app/components/Auth/RegistrationForm"
import LoanApprovalForm from "./app/components/LoanActivities/LoanApprovalForm";
import Navbar from "./app/components/Navbar";

function App() {
  return (
    <>
    <Navbar/>
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/loan-request" element={<LoanRequestForm />} />
        <Route path="/loan-approval-form" element={<LoanApprovalForm />} />
        <Route path="/" element={<RegistrationForm />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
