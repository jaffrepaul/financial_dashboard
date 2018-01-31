import React from 'react';

import './App.css';
import LoanPurpose from './LoanPurpose';
import ClientHomeOwnership from './ClientHomeOwnership';
import dataHalf1 from './data/data_half1.json';
// import dataHalf2 from './data/data_half2.json';
// import preload from './data/data_half2.json';

// const combinedData = [...dataHalf1, ...dataHalf2];

const App = () => (
  // <div>
  //   <pre><code>{JSON.stringify(preload, null, 4)}</code></pre>
  // </div>
  <div className="one">
    {/* <LoanPurpose loanData={dataHalf1} /> */}
    <ClientHomeOwnership loanData={dataHalf1} />
  </div>
);

export default App;
