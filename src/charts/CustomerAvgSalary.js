import React from 'react';
import CountUp from 'react-countup';

const CustomerAvgSalary = ({ loanData }) => {
  const annualIncome = loanData
    .map(person => Math.floor(person.annual_inc))
    .filter(item => (!isNaN(item) ? item : null));

  const averageCalculator = (array) => {
    const sum = array.reduce((a, b) => a + b, 0);
    return Math.floor(sum / array.length);
  };

  const averageSal = averageCalculator(annualIncome);

  const componentStyle = {
    fontFamily: 'Times New Roman',
    fontSize: 80,
    textAlign: 'center',
  };

  return (
    <div style={componentStyle}>
      Customer average salary:{' '}
      <CountUp
        start={averageSal - 300}
        end={averageSal}
        duration={1.5}
        prefix="$"
        separator=","
        useEasing={false}
      />
    </div>
  );
};

export default CustomerAvgSalary;
