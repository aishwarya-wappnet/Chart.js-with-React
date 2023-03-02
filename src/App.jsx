import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import BarChart from './components/BarChart'
import LineChart from './components/LineChart'
import PieChart from './components/PieChart'
import { UserData } from './Data'

function App() {

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [{
      label: "User Gained",
      data: UserData.map((data) => data.userGain),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderWidth: 1,
      borderColor: '#777',
      hoverBorderWidth: 3,
      hoverBorderColor: '#000'
    }]
  });

  return (
    <div className="App">
      <div style={{ width: 700 }}>
      <BarChart chartData={ userData }/>
      </div>
      <div style={{ width: 700 }}>
      <LineChart chartData={ userData }/>
      </div>
      <div style={{ width: 600 }}>
      <PieChart chartData={ userData }/>
      </div>
    </div>
  )
}

export default App;
