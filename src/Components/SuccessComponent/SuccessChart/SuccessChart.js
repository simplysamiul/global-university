import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
const data = [
    {name: '2015', ranking: 300, pv: 2400, amt: 2400},
    {name: '2016', ranking: 260, pv: 2400, amt: 2400},
    {name: '2017', ranking: 320, pv: 2400, amt: 2400},
    {name: '2018', ranking: 210, pv: 2400, amt: 2400},
    {name: '2019', ranking: 145, pv: 2400, amt: 2400},
    {name: '2020', ranking: 90, pv: 2400, amt: 2400}
];

const SuccessChart = () => {
    return (
        <div style={{marginTop : "50px"}}>
            <h2 style={{marginBottom : "50px", textTransform: "uppercase", color: "navy"}}>Our Previous Ranking</h2>
            <BarChart width={800} height={400} data={data}>
                <XAxis dataKey="name" stroke="#8884d8" />
                <YAxis />
                <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
                <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Bar dataKey="ranking" fill="#8884d8" barSize={30} />
            </BarChart>
        </div>
    );
};

export default SuccessChart;