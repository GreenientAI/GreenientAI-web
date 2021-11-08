import React from 'react';
import dynamic from 'next/dynamic';
import axios from 'axios';
const Chart = dynamic(() => import('../../components/Chart'), {
  ssr: false,
});

const View: React.FC = ({}) => {

  return (
    <>
      <Chart/>
    </>
  );
};

export default View;
