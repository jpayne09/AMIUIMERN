import React from 'react';
import { Doughnut } from 'react-chartjs-2';

class DoughnutChart extends React.Component{


  render(){
    var firstLength = this.props.assetData.assetData.length;
    const data = {
      labels: ['Laptop', 'Desktop', 'Server', 'Cloud Service', 'Purple', 'Orange'],
      datasets: [
        {
          label: '# of Assets',
          data: [firstLength, 0, 0, 0, 0, 0],
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

    return(
      <>
        <div className='header'></div>
        <Doughnut data={data} />
      </>
    );
  }
}

/** 
const DoughnutChart = () => (
  <>
    <div className='header'>
    </div>
    <Doughnut data={data} />
  </>
);
*/
export default DoughnutChart;