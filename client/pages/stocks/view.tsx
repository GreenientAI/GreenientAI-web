import React from 'react';
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('../../components/Chart'), {
  ssr: false,
});

interface viewProps {}

const view: React.FC<viewProps> = ({}) => {
  return (
    <>
      <Chart />
    </>
  );
};

export default view;
