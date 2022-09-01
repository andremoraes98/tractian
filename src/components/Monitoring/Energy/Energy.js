import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

function Energy() {
  const options = {
    accessibility: {
      enabled: true,
      description: 'Gráfico que mostra a média diária de temperatura nominal do ativo',
      keyboardNavigation:{
        enabled: true,
      }
    },
    title: {
      text: 'QuiloWatts (kW)'
    },
    subtitle: {
      text: 'Média diária de energia nominal consumida pelo ativo'
    },
    yAxis: {
      title: {
        text: 'kW'
      }
    },
    xAxis: {
      accessibility: {
        rangeDescription: 'Dias do mês'
      },
      type: 'datetime'
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        pointStart: Date.UTC(2022, 6),
        pointInterval: (24 * 3600 * 1000)
      },
    },
    series: [{
      type: 'line',
      name: 'Energia',
      color: '#F28E18',
      marker: {
        enabled: false,
        symbol: 'circle'
      },
      data: [30, 40, 45, 30, 40, 45, 30, 40, 45, 30, 40, 45, 30, 40, 45, 30, 40, 45, 30, 40, 45, 30, 40, 45, 30, 40, 45, 30, 55, 60]
    }, {
      type: 'line',
      name: 'Limite tolerável',
      color: '#ff2020',
      dashStyle: 'LongDashDot',
      marker: {
        enabled: false,
        symbol: 'circle'
      },
      data: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50]
    }],
    responsive: {
      rules: [{
        condition: {
          maxWidth: 400
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    },
  };

  return (
    <div id="graphic">
      <HighchartsReact
        highcharts={ Highcharts }
        options={ options }
      />
    </div>
  )
}

export default Energy;
