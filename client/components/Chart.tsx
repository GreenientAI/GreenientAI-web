import React, { useRef, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { createChart } from 'lightweight-charts';
import axios from 'axios';

interface ChartProps {}

const Chart: React.FC<ChartProps> = ({}) => {
  const chartRef = useRef<HTMLDivElement>(null);

  const alphaVantageKey = 'EOIABUBVKGRVRLSV';

  interface IStockData {
    time: string;
    value: number;
  }

  const [stockData, setStockData] = useState<Array<IStockData>>([
    {
      time: '',
      value: 0,
    },
  ]);

  useEffect(() => {
    axios
      .get(
        `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=AAPL&apikey=${alphaVantageKey}`
      )
      .then((res: any) => {
        const data = res['data']['Monthly Adjusted Time Series'];
        const formattedData = Object.keys(data).map((time: string) => {
          return {
            time,
            value: +data[time]['5. adjusted close'],
          };
        });
        formattedData.reverse();
        setStockData(formattedData);
      })
      .catch((err: any) => {
        console.log(err);
      });

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
        },
      });
      const areaSeries = chart.addAreaSeries({
        topColor: 'rgba(0, 255, 0, 0.5)',
        bottomColor: 'rgba(0, 255, 0, 0.05)',
        lineColor: 'rgba(0, 255, 0, 1)',
        lineWidth: 2,
      });
      areaSeries.setData(stockData);

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
