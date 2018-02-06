import React from 'react';
import { Bar, Line, Pie, Doughnut, Radar, Polar } from 'react-chartjs-2';

const LoanPurpose = ({ loanData }) => {
  // grab array of all loan purpose & filter erroneous data
  const purpose = loanData.map(person => person.purpose).filter((item) => {
    const target = /^[0-9A-Z-' ']/gm;
    return (!item.match(target));
  });

  // create hashmap of purpose & count
  const purposeFrequency = purpose.reduce((obj, cur) => {
    obj[cur] ? (obj[cur] += 1) : (obj[cur] = 1);
    return obj;
  }, {});

  // final purpose count
  const purposeCount = Object.values(purposeFrequency);

  // remove duplicates
  const uniquePurposes = [...new Set(purpose)];

  const data = {
    labels: uniquePurposes,
    datasets: [
      {
        data: purposeCount,
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)', // pink
          'rgba(116, 185, 255, 0.6)', // blue
          'rgba(255, 206, 86, 0.6)', // green
          'rgba(75, 192, 192, 0.6)', // yellow
          'rgba(153, 102, 255, 0.6)', // orange
          'rgba(255, 159, 64, 0.6)', // purple
          'rgba(129, 236, 236, 0.6)', // aqua
          'rgba(178, 190, 195, 0.6)', // grey
          'rgba(85, 239, 196, 0.6)', // mint
          'rgba(9, 132, 227, 0.6)', // darker blue
          'rgba(214, 48, 49, 0.6)', // red
          'rgba(232, 67, 147, 0.6)', // dark purple
          'rgba(255, 118, 117, 0.6)', // pink mix
        ],
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: 'Customer Loan Purpose',
      fontSize: 25,
    },
    legend: {
      display: false,
      position: 'top',
      labels: {
        fontColor: '#000',
      },
    },
    layout: {
      padding: {
        left: 50,
        right: 50,
        bottom: 0,
        top: 0,
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    tooltips: {
      enabled: true,
    },
    maintainAspectRatio: true,
  };

  return <Bar data={data} options={options} />;
};

export default LoanPurpose;
