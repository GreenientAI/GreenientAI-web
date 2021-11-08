import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import axios from 'axios';
const Chart = dynamic(() => import('../../components/Chart'), {
  ssr: false,
});

const View: React.FC = ({}) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    // Get historical data from yahoo finance api using axios
    // axios.get('https://query1.finance.yahoo.com/v8/finance/chart/AAPL?region=US&lang=en-US&interval=1wk&useYfid=true&range=max&.tsrc=finance')
    //   .then(res => {
    //     console.log(res.data)
    //     setData(res.data);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }, []);

  return (
    <>
      {JSON.stringify(data)}
    </>
  );
};

export default View;
