import React, { useEffect } from 'react';
import { BarChart, Bar, ResponsiveContainer,XAxis,YAxis } from 'recharts';



const BarGraph = ({ expenseList }) => { 

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
    <ResponsiveContainer width="100%" height={345}>
      <BarChart
        layout="vertical"
        data={data} 
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis type="number" hide={true} />
        <YAxis
          type="category"
          dataKey="catagory"
          axisLine={false}
          tickLine={false}
          strokeWidth={2}
          width={100}
          padding={{ left: 10, bottom: 10 }}
        />
        <Bar
          dataKey="price"
          barSize={32}
          radius={[0, 20, 20, 0]}
          fill="#8784D2"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarGraph;

