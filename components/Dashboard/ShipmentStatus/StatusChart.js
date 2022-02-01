import dynamic from 'next/dynamic';
import { Component } from 'react';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

class StatusChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [351, 320, 500, 250],
      options: {
        stroke: {
          width: 0
        },
        labels: ["Delivered", "In Route", "In Progress", "Canceled"],
        chart: {
          type: 'donut',
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            }
          }
        }],
        legend: {
          show: true,
          position: 'right',
          horizontalAlign: 'center',
          fontSize: '14px',
          fontFamily: '"Manrope", sans-serif',
          fontWeight: 500,
          offsetX: 25,
          offsetY: 10,
          labels: {
            colors: ["#696C80"],
          },
          markers: {
            offsetX: -4,
          },
          itemMargin: {
            vertical: 10
          },
        },
        plotOptions: {
          pie: {
            expandOnClick: false,
            donut: {
              size: '75%',
              labels: {
                show: true,
                name: {
                  show: true,
                  fontSize: '14px',
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: 500,
                  color: "#696C80",
                  offsetY: 24,
                },
                value: {
                  show: true,
                  fontSize: '24px',
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: 600,
                  color: "#12131A",
                  offsetY: -15,
                },
                total: {
                  show: true,
                  showAlways: true,
                  label: 'Shipments',
                  fontSize: '14px',
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: 500,
                  color: '#696C80',
                }
              }
            }
          },
        },
        tooltip: {
          enabled: false,
        },
        colors: ['#5542F6', '#00A5FF', '#FFDA13', '#FE3B2E'],
        dataLabels: {
          enabled: false,
        },
      },
    };
  }
  render() {
    return (
      <div id="chart">
        <Chart height={220} options={this.state.options} series={this.state.series} type="donut" />
      </div>
    );
  }
}

export default StatusChart;