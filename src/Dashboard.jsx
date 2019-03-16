import React, { Component } from 'react';
import { Button, Icon, Table, Divider, Tag } from 'antd';
import axios from 'axios'

import { VictoryChart, VictoryScatter} from "victory";

import './Dashboard.css';

const tableData = [
  {language: 'Hindi', english_text: 'Hello', score: 0.7, translated_text: 'Namaste', id: 3456784},
  {language: 'Hindi', english_text: 'Hello', score: 0.7, translated_text: 'Namaste', id: 45678},
  {language: 'Hindi', english_text: 'Hello', score: 0.1, translated_text: 'Namaste', id: 56784},
  {language: 'Hindi', english_text: 'Hello', score: 0.1, translated_text: 'Namaste', id: 56784},
  {language: 'Hindi', english_text: 'Hello', score: 0.1, translated_text: 'Namaste', id: 56784},
  {language: 'Hindi', english_text: 'Hello', score: 0.1, translated_text: 'Namaste', id: 56784},
  {language: 'Hindi', english_text: 'Hello', score: 0.1, translated_text: 'Namaste', id: 56784},
  {language: 'Hindi', english_text: 'Hello', score: 0.1, translated_text: 'Namaste', id: 56784},
  {language: 'Hindi', english_text: 'Hello', score: 0.1, translated_text: 'Namaste', id: 56784},
  {language: 'Hindi', english_text: 'Hello', score: 0.1, translated_text: 'Namaste', id: 56784},
  {language: 'Hindi', english_text: 'Hello', score: 0.1, translated_text: 'Namaste', id: 56784},
  {language: 'Hindi', english_text: 'Hello', score: 0.1, translated_text: 'Namaste', id: 56784},
  {language: 'Hindi', english_text: 'Hello', score: 0.1, translated_text: 'Namaste', id: 56784},
  {language: 'Hindi', english_text: 'Hello', score: 0.1, translated_text: 'Namaste', id: 56784},

]

const graphData = [
    {type: 'Mean Vector', X: 30, Y: 200},
    {type: 'Data Set', X: 30, Y: 100},
    {type: 'Data Set', X: 30, Y: 120},
    {type: 'Data Set', X: 50, Y: 50},
    {type: 'Data Set', X: 200, Y: 200},
    {type: 'Data Set', X: 70, Y: 80},
    {type: 'Data Set', X: 100, Y: 100},
]

const fliteredData = tableData.filter(data => data.score > 0.2)
const newData = []

for(var i = 0; i< fliteredData.length; i++) {
  let newArray = [];
  Object.entries(fliteredData[i]).forEach(dataCSV => {
    let key = dataCSV[0];
    let value = dataCSV[1];
    if(key != 'score'){
      newArray.push(value)
    }
  })
  newData.push(newArray)
}

const columns = [
  {
    title: 'Indigenous language',
    dataIndex: 'translated_text',
    key: 'translated_text',
    width: '46%'
  }, {
    title: 'English Text',
    dataIndex: 'english_text',
    key: 'english_text',
    width: '46%'
  } , {
    title: 'Score',
    dataIndex: 'score',
    key: 'score',
    render: score => (
        <span>
          <Tag color={score > 0.2 ? 'green' : 'volcano'} key={score}>{score}</Tag>
        </span>
    ),
    width: '8%'
  }];

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showData: false,
        }
    }

  fetchData = (idx) => {
    this.setState({showData: true})
  }

  onDownloadCSV = () => {
    let csvContent = "data:text/csv;charset=utf-8,";
    newData.forEach(function(rowArray){
      let row = rowArray.join(",");
      csvContent += row + "\r\n";
    });
    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "my_data.csv");
    document.body.appendChild(link); // Required for FF
    link.click();
  }

  render() {
    return (
      <div className="App">
        <div className="top__container">
          <Button onClick = {() => this.props.handleDashboardRouting()} shape="round" type="primary">
            <Icon type="left" />Go back
          </Button>
          <Button
            onClick = {this.onDownloadCSV}
            style={{float: 'right'}} type="primary" shape="round" icon="download" size={"large"}>Download</Button>
        </div>
        {/* Main Content */}
        <div className="content__container">
            <div className="table__container">
              {/* Table */}
              <Table
                onRow={(record, rowIndex) => {
                  return {
                    onClick: (event) => {
                      console.log(record, "record")
                      this.fetchData(record.id)
                    },
                  }
                }}
                dataSource={tableData}
                columns={columns}
              />
            </div>
          <div>
            <div>
            <div>
        {this.state.showData &&
        <VictoryChart
            domain={{ x: [0, 10], y: [0, 10] }}
        >
        <VictoryScatter
            style={{ data: { fill: "#71B9FD" } }}
            size={4}
            data={[
              { x: 1, y: 2, symbol: "square" },
              { x: 2, y: 3 },
              { x: 3, y: 5 },
              { x: 4, y: 4 },
              { x: 5, y: 7 }
            ]}
        />
        </VictoryChart>
        }
      </div>
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
