import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
const data = [
    {
      "name": "USA",
      "Death": 4000,
      "Year": 2400,
      "Affected": 2400
    },
    {
      "name": "India",
      "Death": 3000,
      "Year": 1398,
      "Affected": 2210
    },
    {
      "name": "Brazil",
      "Death": 2000,
      "Year": 2500,
      "Affected": 2290
    },
    {
      "name": "UK",
      "Death": 2780,
      "Year": 3908,
      "Affected": 2000
    },
    {
      "name": "Page E",
      "Death": 1890,
      "Year": 4800,
      "Affected": 2181
    },
    {
      "name": "Russia",
      "Death": 2390,
      "Year": 3800,
      "Affected": 2500
    },
    {
      "name": "Turkey",
      "Death": 3490,
      "Year": 4300,
      "Affected": 2100
    }
  ]
  
  

const CovidChart = () => {
    return (
        <div>
            <ComposedChart width={800} height={400} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid stroke="#f5f5f5" />
                <Area type="monotone" dataKey="Affected" fill="#8884d8" stroke="#8884d8" />
                <Bar dataKey="Year" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="Death" stroke="#ff7300" />
            </ComposedChart>
        </div>
    );
};

export default CovidChart;