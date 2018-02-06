import React from 'react';
import { Bar, Line, Pie, Doughnut, Radar, Polar } from 'react-chartjs-2';

const CustomerAvgEmploymentLength = ({ loanData }) => {
  const employments = loanData.map(person => person.emp_length).filter((item) => {
    const employmentstarget = /^[0-9<]/gm;
    return item.match(employmentstarget);
  });

  const employmentYears = employments.map(el => (el.includes('<') ? Number(el.slice(2, 3)) : Number(el.slice(0, 2))));
  console.log('employmentYears', employmentYears);

  const zeroToFiveYears = employmentYears.filter(el => el <= 5);
  const fiveToTenYears = employmentYears.filter(el => el >= 5 && el <= 10);
  const tenPlusYears = employmentYears.filter(el => el >= 10);

  const yearsFrequency = employmentYears.reduce((obj, cur) => {
    obj[cur] ? (obj[cur] += 1) : (obj[cur] = 1);
    return obj;
  }, {});
  console.log(yearsFrequency);

  const data = {
    labels: ['0-5 Years', '5-10 Years', '10+ Years'],
    datasets: [
      {
        data: [zeroToFiveYears.length, fiveToTenYears.length, tenPlusYears.length],
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
      text: 'Customer Employment Length',
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

export default CustomerAvgEmploymentLength;
