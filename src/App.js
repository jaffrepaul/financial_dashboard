import React from 'react';

import './App.css';
import dataHalf1 from './data/data_half1.json';
// import dataHalf2 from './data/data_half2.json';
// import preload from './data/data_half2.json';
import LoanPurpose from './charts/LoanPurpose';
import ClientHomeOwnership from './charts/ClientHomeOwnership';
import CustomerAvgSalary from './charts/CustomerAvgSalary';
import CustomerAvgEmploymentLength from './charts/CustomerAvgEmploymentLength';
// const combinedData = [...dataHalf1, ...dataHalf2];

const App = () => (
  <div>
    <LoanPurpose loanData={dataHalf1} />
    <ClientHomeOwnership loanData={dataHalf1} />
    <CustomerAvgSalary loanData={dataHalf1} />
    <CustomerAvgEmploymentLength loanData={dataHalf1} />
  </div>
);

export default App;
