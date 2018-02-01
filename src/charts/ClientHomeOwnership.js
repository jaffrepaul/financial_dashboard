import React from 'react';
import { Bar, Line, Pie, Doughnut, Radar, Polar } from 'react-chartjs-2';

const ClientHomeOwnership = ({ loanData }) => {
  const filteredItems = /[0-9a-z!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

  const livingStatus = loanData
    .map(person => person.home_ownership)
    .filter(item => (!item.match(filteredItems) ? item : null));

  const uniqueLivingStatus = [...new Set(livingStatus)];

  const livingStatusFrequency = livingStatus.reduce((obj, cur) => {
    obj[cur] ? (obj[cur] += 1) : (obj[cur] = 1);
    return obj;
  }, {});

  const livingStatusCount = Object.values(livingStatusFrequency);

  const data = {
    labels: uniqueLivingStatus,
    datasets: [
      {
        data: livingStatusCount,
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)', // pink
          'rgba(116, 185, 255, 0.6)', // blue
          'rgba(255, 206, 86, 0.6)', // green
          'rgba(75, 192, 192, 0.6)', // yellow
        ],
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: 'Customer Living Status',
      fontSize: 25,
    },
    legend: {
      display: true,
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
    tooltips: {
      enabled: true,
    },
    maintainAspectRatio: true,
  };

  return <Doughnut data={data} options={options} />;
};

export default ClientHomeOwnership;
