import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { approveLoan } from '../../authslice/loanAction';
import "../LoanActivities/Approval.css"

const LoanApprovalForm = () => {
  const dispatch = useDispatch();
  const [loanId, setLoanId] = useState('');

  const handleApproveLoan = () => {
    dispatch(approveLoan(loanId));
  };

  return (
    <body className='full-background-a'>
     <h1  className='full'>Approve your Loan</h1>
    <div className="loan-approval-form-container ">
   
      <h2 className="approval-header">Loan Approval</h2>
      <label className="loan-label">Loan ID:</label>
      <input
        className="loan-request-form-input"
        type="text"
        value={loanId}
        onChange={(e) => setLoanId(e.target.value)}
      />
      <button className="approval-button" onClick={handleApproveLoan}>
        Approve Loan
      </button>
    </div>
    </body>
  );
};

export default LoanApprovalForm;
