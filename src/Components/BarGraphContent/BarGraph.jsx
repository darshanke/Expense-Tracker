// import React from 'react';
// import { BarChart, Bar, ResponsiveContainer,XAxis,YAxis } from 'recharts';

// const data = [
//   { name: 'Page A', price: 4000, pv: 2400, amt: 2400 },
//   { name: 'Page B', price: 3000, pv: 1398, amt: 2210 },
//   { name: 'Page C', price: 2000, pv: 9800, amt: 2290 }

// ];


// const BarGraph = ({ data }) => { 
//   return (
//     <ResponsiveContainer width="100%" height={345}>
//       <BarChart
//         layout="vertical"
//         data={data} 
//         margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
//       >
//         <XAxis type="number" hide={true} />
//         <YAxis
//           type="category"
//           dataKey="catagory"
//           axisLine={false}
//           tickLine={false}
//           strokeWidth={2}
//         />
//         <Bar
//           dataKey="price"
//           barSize={32}
//           radius={[0, 20, 20, 0]}
//           fill="#8784D2"
//         />
//       </BarChart>
//     </ResponsiveContainer>
//   );
// };

// export default BarGraph;

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

