import React, { useEffect } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} 
    dominantBaseline="central"
    fontSize="16px"      
    fontWeight="bold"     
    style={{ fontFamily: 'Arial, sans-serif' }} 
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const PieCharts = ({ expenseList={expenseList}}) => {

  const aggregatedData = expenseList.reduce((acc, item) => {
    const { catagory, price } = item;

   
    if (acc[catagory]) {
      acc[catagory].price += price;
    } else {
    
      acc[catagory] = { catagory, price };
    }

    return acc;
  }, {});


  const data = Object.values(aggregatedData);


  useEffect(()=>{

  },[expenseList])


  return (
    <div style={{width: "200px", height:"200px"}}>
 <ResponsiveContainer >
      <PieChart width={200} height={200}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="price"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
    </div>
   
  );
};

export default PieCharts;
