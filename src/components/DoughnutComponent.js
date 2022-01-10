import React from 'react';
import { Doughnut } from 'react-chartjs-2';

var arrayFromStorage = JSON.parse(localStorage.getItem("test1"));
if(arrayFromStorage != null){
  var arrayLength = arrayFromStorage.length;
}else{
  arrayLength = '0'
}

const data = {
  labels: ['Laptop', 'Desktop', 'Server', 'Cloud Service', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Assets',
      data: [arrayLength, 0, 0, 0, 0, 0],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
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

const DoughnutChart = () => (
  <>
    <div className='header'>
    </div>
    <Doughnut data={data} />
  </>
);

export default DoughnutChart;