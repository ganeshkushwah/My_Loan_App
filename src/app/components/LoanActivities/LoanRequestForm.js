import React, { useState } from "react";
import { useDispatch } from "react-redux";
import apiService from "../../api/apiService";
import { setLoans } from "../../authslice/loanSlice";
import '../LoanActivities/LoanRequestForm.css';
import { Link } from "react-router-dom";

const LoanRequestForm = () => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState("");
  const [term, setTerm] = useState("");

  const handleLoanRequest = async () => {
    try {
      const response = await apiService.post("/loan/request", { amount, term });
      dispatch(setLoans(response.data));
    } catch (error) {
      console.error("Loan request failed", error);
    }
  };

  return (
    <body className="full-background-req ">
    <div className="loan-request-form-container">
      <h2 className="loan-request-form-header">Loan Request</h2>
      <label className="loan-request-form-label">Amount:</label>
      <input
        className="loan-request-form-input"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <label className="loan-request-form-label">Term:</label>
      <input
        className="loan-request-form-input"
        type="number"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
     <Link to="/loan-approval-form">
  <button className="loan-request-form-button" onClick={handleLoanRequest}>
    Request Loan
  </button>
</Link>

    </div>
    </body>
  );
};

export default LoanRequestForm;
