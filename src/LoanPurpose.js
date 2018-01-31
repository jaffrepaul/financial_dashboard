import React from 'react';
import { Bar, Line, Pie, Doughnut, Radar, Polar } from 'react-chartjs-2';

const LoanPurpose = ({ loanData }) => {
  // grab array of all loan purpose
  const purpose = loanData.map(person => person.purpose);

  // remove duplicates
  const uniquePurposes = [...new Set(purpose)];

  // filter loanData for erroneous results
  const filteredPurposeLables = uniquePurposes.filter((item) => {
    const firstLetter = item.charAt(0);
    if (!item.includes('-') && !item.includes(' ') && firstLetter !== firstLetter.toUpperCase()) {
      return item;
    }
  });

  const data = {
    labels: filteredPurposeLables,
    datasets: [
      {
        data: [1, 2, 3, 4],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)', // pink
          'rgba(54, 162, 235, 0.6)', // blue
          'rgba(255, 206, 86, 0.6)', // green
          'rgba(75, 192, 192, 0.6)', // yellow
          'rgba(153, 102, 255, 0.6)', // orange
          'rgba(255, 159, 64, 0.6)', // purple
          'rgba(255, 99, 132, 0.6)', // grey
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
        right: 0,
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
