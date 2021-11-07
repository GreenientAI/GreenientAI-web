import React, { useRef, useEffect } from 'react';
import dynamic from 'next/dynamic'
import { createChart } from 'lightweight-charts'

interface ChartProps {
  
}


const Chart: React.FC<ChartProps> = ({ }) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = createChart(chartRef.current, {
        width: 800,
        height: 300,
        layout: {
          backgroundColor: '#04162d',
          textColor: '#98b2cc',
        },
        grid: {
          vertLines: {
            visible: false,
          },
          horzLines: {
            color: '#303030',
          },
        },
        rightPriceScale: {
          borderVisible: false,
        },
        timeScale: {
          borderVisible: false,
        }
      });
      const areaSeries = chart.addAreaSeries({
        topColor: 'rgba(0, 255, 0, 0.5)',
        bottomColor: 'rgba(0, 255, 0, 0.05)',
        lineColor: 'rgba(0, 255, 0, 1)',
        lineWidth: 2,
      });
      areaSeries.setData([
        { time: '2019-04-11', value: 80.01 },
        { time: '2019-04-12', value: 96.63 },
        { time: '2019-04-13', value: 76.64 },
        { time: '2019-04-14', value: 81.89 },
        { time: '2019-04-15', value: 74.43 },
        { time: '2019-04-16', value: 80.01 },
        { time: '2019-04-17', value: 96.63 },
        { time: '2019-04-18', value: 76.64 },
        { time: '2019-04-19', value: 81.89 },
        { time: '2019-04-20', value: 74.43 },
      ]);


      chart.timeScale().fitContent();
      chart.timeScale().scrollToRealTime();
    }
  }, []);

  return (
    <>
      <div ref={chartRef}></div>
    </>
  );
};

export default Chart;