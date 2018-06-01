import React, { PureComponent } from 'react';
import { Line as LineChart } from 'react-chartjs';

const csvFile = '/assets/data/data.csv';
const dataOptions = {
  fillColor: "rgba(220,220,220,0.2)",
  pointColor: "rgba(220,220,220,1)",
  pointHighlightFill: "#fff",
  pointHighlightStroke: "rgba(220,220,220,1)",
  pointStrokeColor: "#fff",
  strokeColor: "rgba(220,220,220,1)",
};

class Graph extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      headers: [],
      data: [],
      loading: true,
    };
  }
  componentDidMount = async () => {
    const csvText = await fetch(csvFile).then(rep => rep.text());

    this._formatedCsv(csvText);
  }

  _testNumber = (number) => {
    return Number.isInteger(parseInt(number, 10)) ? parseInt(number, 10) : null;
  }

  _formatedData = (csvText) => {
    let date = [], balance = [], credit = [], debit = [];
    const labels = csvText.split("\n").map((row, index) => {
      const tmp = row.split(",");
      if (index === 0) return tmp;
      else {
        date.push(tmp[0]);
        credit.push(this._testNumber(tmp[1], 10));
        debit.push(this._testNumber(tmp[2], 10));
        balance.push(this._testNumber(tmp[3], 10));
      }
    });

    return { date, credit, debit, balance, labels };
  }

  _formatedCsv = (csvText) => {
    const { date, credit, debit, balance, labels } = this._formatedData(csvText);
    const csvData = [
      {
        ...dataOptions,
        label: labels[0],
        data: credit,
      },
      {
        label: 'balance',
        data: balance,
      },
      {
        label: 'debit',
        data: debit,
      },
    ];
    const headers = date;
    const data = csvData;
    this.setState({
      data,
      headers,
      loading: false,
    });
  }

  render() {
    const { loading, data, headers } = this.state;
    const chartData = {
      labels: headers,
      datasets: data
    };

    if (loading) {
      return (
        <div className='Graph'>
          Chargement en cours ...
        </div>
      );
    }

    return (
      <div>
        <h1>Graph Page</h1>
        <LineChart data={chartData} options={{}} width={window.innerWidth || 1200} height="300"/>
      </div>
    );
  }
}

export default Graph;
