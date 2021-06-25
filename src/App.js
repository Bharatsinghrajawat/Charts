import React from 'react'
import BarChart from './components/Bar'
import BubbleChart from './components/Bubble'
import DoughnutChart from './components/Doughnut'
import LineChart from './components/Line'
import PieChart from './components/Pie'
import PolarAreaChart from './components/PolarArea'
import RadarChart from './components/Radar'
import ScatterChart from './components/Scatter'
export default function App() {
    return (
        <div>
            <LineChart />
            <BarChart />
            <PieChart />
            <RadarChart />
            <DoughnutChart />
            <PolarAreaChart />
            <BubbleChart />
            <ScatterChart />
        </div>
    )
}
