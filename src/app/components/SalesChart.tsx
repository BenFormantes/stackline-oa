import React from 'react'

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAppSelector } from '../hooks'
import { Sales } from '../types/retailItem-types'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import './SalesChart.css'

export default function SalesChart() {
  const salesData: Sales[] | null | undefined = useAppSelector(
    (state) => state.retailItem.retailItem?.sales
  )

  const retailSales = salesData?.map((item) => {
    return {
      x: new Date(item.weekEnding).getTime(),
      y: item.retailSales,
    }
  })
  const wholesaleSales = salesData?.map((item) => {
    return {
      x: new Date(item.weekEnding).getTime(),
      y: item.wholesaleSales,
    }
  })

  const options: Highcharts.Options = {
    title: {
      text: 'Retail Sales',
      align: 'left',
    },
    series: [
      {
        name: 'Retail Sales',
        data: retailSales || [],
        type: 'spline',
      },
      {
        name: 'Wholesale Sales',
        data: wholesaleSales || [],
        type: 'spline',
      },
    ],
    yAxis: {
      visible: false,
    },
    xAxis: {
      type: 'datetime',
    },
    plotOptions: {
      spline: {
        marker: {
          enabled: false,
        },
      },
    },
  }

  return (
    <div className="chart-container">
      <HighchartsReact
        className="chart"
        highcharts={Highcharts}
        options={options}
      />
    </div>
  )
}
