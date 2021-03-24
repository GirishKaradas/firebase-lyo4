
import Chart from "react-apexcharts";
import React, { useEffect, useState } from 'react'
import { Line } from "react-chartjs-2";

const TestHome = ({time1, data}) => {
  let time = []
  let temp = []
  let stillTime = []
  let pressure = []
  const [timeData, setTimeData] = useState([])
  const [stillTimeData, setStillTimeData] = useState([])
  const [tempData, setTempData] = useState([])
  const [pressureData, setPressureData] = useState([])

  useEffect(() => {
    for (let index = 0; index < data.length; index++) {
      time.push(data[index].time1);
      temp.push(data[index].temp1)
      stillTime.push(data[index].time2)
      pressure.push(data[index].pressure)
    }
  setTimeData(time)
  setTempData(temp)
  setStillTimeData(stillTime)
  setPressureData(pressure)
  })
  console.log(timeData)
const options = {
  chart: {
    id: "basic-line"
  },
  xaxis: {
    categories: timeData
  },
  markers: {
    size: 0,
},
  
}

const series = [
     { 
          name: "Temprature",
          data: tempData
     },
 { 
          name: "Pressure",
          data: pressureData
     },
]

const dataTwo = {
  labels: timeData,
  datasets: [
    {
      label: 'Temprature',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#b8b5ff',
      borderColor: '#b8b5ff',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#fa1e0e',
      pointBackgroundColor: '#fa1e0e',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#fa1e0e',
      pointHoverBorderColor: '#7868e6',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: tempData
    }
  ]
};

const dataOne = {
  labels: timeData,
  datasets: [
    {
      label: 'Pressure',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#f14668',
      borderColor: '#f14668',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#fa1e0e',
      pointBackgroundColor: '#fa1e0e',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#fa1e0e',
      pointHoverBorderColor: '#7868e6',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: pressureData
    }
  ]
};

    return (
        <div>
        <Line  data={dataTwo}/>
        <Line data={dataOne}/>
        </div>
    )
}

export default TestHome
