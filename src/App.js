import React from 'react';

import './App.css';
import dataHalf1 from './data/data_half1.json';
// import dataHalf2 from './data/data_half2.json';
// import preload from './data/data_half2.json';
// import LoanPurpose from './charts/LoanPurpose';
// import ClientHomeOwnership from './charts/ClientHomeOwnership';
import UserStats from './charts/UserStats';
// const combinedData = [...dataHalf1, ...dataHalf2];

const App = () => (
  // <div>
  //   <pre><code>{JSON.stringify(preload, null, 4)}</code></pre>
  // </div>
  <div className="one">
    {/* <LoanPurpose loanData={dataHalf1} /> */}
    {/* <ClientHomeOwnership loanData={dataHalf1} /> */}
    <UserStats loanData={dataHalf1} />
  </div>
);

export default App;
