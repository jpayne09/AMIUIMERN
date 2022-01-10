import React from 'react';
import { Bar } from 'react-chartjs-2';


var arrayFromStorage = JSON.parse(localStorage.getItem("test1"));
if(arrayFromStorage != null){
  var arrayLength = arrayFromStorage.length;
}else{
  arrayLength = '0'
}

const data = {
  labels: ['Laptop'],
  datasets: [
    {
      label: '# of Assets',
      data: [arrayLength],
      backgroundColor: [
        '#0099CC'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
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