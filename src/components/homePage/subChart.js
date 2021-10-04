import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  datasets: [
    {
      label: '',
      data: [12, 19, 3, 5, 2, 3, 15],
      backgroundColor: "#6C6DFF",
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const VerticalBar = () => (
  <>
    <Bar data={data} options={options} />
  </>
);

export default VerticalBar;
