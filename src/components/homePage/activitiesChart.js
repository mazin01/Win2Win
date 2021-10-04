import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['Special Event', 'Random Event', 'Competition Event'],
  datasets: [
    {
      label: '',
      data: [12, 19, 3],
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

const VerticalBar2 = () => (
  <>
    <Bar data={data} options={options} />
  </>
);

export default VerticalBar2;