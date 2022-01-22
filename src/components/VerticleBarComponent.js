import React, {useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

class VerticalBar extends React.Component{

  render() {

  console.log("vbar", this.props.assetData.assetData);
  const data = {
    labels: ['Laptop'],
    datasets: [
      {
        label: '# of Assets',
        data: [this.props.assetData.assetData.length],
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


return(
    <>
    <Bar data={data} options={options} />
    </>
  )
}

}
export default VerticalBar;