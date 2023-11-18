import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
const Statistics = () => {
    const data = [
        { name: 'Software', vacancy: 400, pv: 2400, amt: 2400 },
        { name: 'IT', vacancy: 200, pv: 2400, amt: 300 },
        { name: 'Custom', vacancy: 300, pv: 2400, amt: 2400 },
        { name: 'Product', vacancy: 600, pv: 2400, amt: 2400 },
        { name: 'Data Science', vacancy: 100, pv: 2400, amt: 2400 },
        { name: 'Data Analysis', vacancy: 500, pv: 2400, amt: 2400 },
    ];
    return (
        <div>
            <LineChart width={800} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="vacancy" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="10 10" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />

            </LineChart>
            <p style={{textAlign:'center', fontSize:'20px'}}>Vacancy in Job Hunting</p>
        </div>

    );
};

export default Statistics;