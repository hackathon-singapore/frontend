import React, { Component } from 'react';
import { Button, Icon, Table, Divider, Tag } from 'antd';
import axios from 'axios'

import { VictoryChart, VictoryScatter} from "victory";

import './Dashboard.css';

const tableData = [
  {language: 'Hindi', english_text: 'Hello', score: 0.7, translated_text: 'Namaste'},
  {language: 'Hindi', english_text: 'Hello', score: 0.7, translated_text: 'Namaste'},
  {language: 'Hindi', english_text: 'Hello', score: 0.1, translated_text: 'Namaste'},
  {language: 'Hindi', english_text: 'Hello', score: 0.1, translated_text: 'Namaste'},
  {language: 'Hindi', english_text: 'Hello', score: 0.1, translated_text: 'Namaste'},
  {language: 'Hindi', english_text: 'Hello', score: 0.1, translated_text: 'Namaste'},
  {language: 'Hindi', english_text: 'Hello', score: 0.1, translated_text: 'Namaste'},
  {language: 'Hindi', english_text: 'Hello', score: 0.1, translated_text: 'Namaste'},
  {language: 'Hindi', english_text: 'Hello', score: 0.1, translated_text: 'Namaste'},
  {language: 'Hindi', english_text: 'Hello', score: 0.1, translated_text: 'Namaste'},
  {language: 'Hindi', english_text: 'Hello', score: 0.1, translated_text: 'Namaste'},
  {language: 'Hindi', english_text: 'Hello', score: 0.1, translated_text: 'Namaste'},
  {language: 'Hindi', english_text: 'Hello', score: 0.1, translated_text: 'Namaste'},
  {language: 'Hindi', english_text: 'Hello', score: 0.1, translated_text: 'Namaste'},
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
    let index = Math.floor(Math.random() * Math.floor(2));
    
    //tableData[index]
    return fData[index];
  }
  resetData = () => {
    this.setState({showData: false})
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
    document.body.appendChild(link);
    link.click();
  }

  render() {
    return (
      <div className="App">
        <div className="top__container">
          <Button onClick = {() => this.props.handleDashboardRouting()} shape="round" type="primary">
            <Icon type="left" />Go back
          </Button>
          {this.state.showData && <Button onClick = {this.resetData} style={{marginLeft: '12px'}} type="primary" shape="circle" icon="undo" />}
          <Button
            onClick = {this.onDownloadCSV}
            style={{marginLeft: '850px'}} type="primary" shape="round" icon="download" size={"large"}>Download</Button>
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
            <div className="graph__container">
        {this.state.showData &&
        <VictoryChart
            domain={{ x: [-2, 2], y: [-2, 2] }}
        >
        <VictoryScatter
            style={{ data: { fill: "#71B9FD" } }}
            size={4}
            data=
            {[{y: -0.5790154337882996, x: 1.3715649843215942}, {y: -0.9510072469711304, x: 0.6625671982765198}, {y: -1.025810718536377, x: -0.10735747218132019}, {y: -0.16692273318767548, x: 1.8462237119674683}, {y: -0.5772745013237, x: 1.3729757070541382}, {y: -0.9516267776489258, x: 0.6676682829856873}, {y: -1.021437168121338, x: -0.0951060950756073}, {y: -0.1666278839111328, x: 1.843111515045166}, {y: -0.5734219551086426, x: 1.3718421459197998}, {y: -0.9516045451164246, x: 0.6702108979225159}, {y: -1.0261099338531494, x: -0.1050219014286995}, {y: -0.16031597554683685, x: 1.8504524230957031}, {y: 0.13690386712551117, x: -0.4507425129413605}, {y: 2.024019479751587, x: 0.9457949995994568}, {y: 1.351021647453308, x: 0.027022046968340874}, {y: 1.367580771446228, x: -0.0014649194199591875}, {y: 1.3675801753997803, x: -0.0014647007919847965}, {y: 1.3675812482833862, x: -0.0014648584183305502}, {y: 1.3364287614822388, x: -0.005077097564935684}, {y: 1.3364285230636597, x: -0.0050764731131494045}, {y: 0.01333194226026535, x: -0.011055970564484596}, {y: 0.013330901972949505, x: -0.011055223643779755}, {y: 0.2534361779689789, x: 0.7912367582321167}, {y: 1.1168948411941528, x: 0.06503237783908844}, {y: 0.11431712657213211, x: 0.553837239742279}, {y: 1.1502691507339478, x: 0.14188086986541748}, {y: 1.1168937683105469, x: 0.06503184139728546}, {y: 1.1168947219848633, x: 0.06503231078386307}, {y: 1.1168946027755737, x: 0.06503219902515411}, {y: 1.1168948411941528, x: 0.06503136456012726}, {y: 1.1502668857574463, x: 0.14187875390052795}, {y: 1.1168946027755737, x: 0.0650331899523735}, {y: 1.1502691507339478, x: 0.14187724888324738}, {y: 1.1502681970596313, x: 0.14187951385974884}, {y: 1.2913146018981934, x: 0.07150686532258987}, {y: 0.26277613639831543, x: 0.8032078742980957}, {y: 1.3510212898254395, x: 0.02702254243195057}, {y: 1.318419098854065, x: 0.01753581501543522}, {y: 0.7972370982170105, x: 1.1966114044189453}, {y: 1.3675806522369385, x: -0.0014637003187090158}, {y: 2.224658489227295, x: 0.6846584677696228}, {y: 1.3670141696929932, x: -0.0022812876850366592}, {y: 0.7882603406906128, x: -1.0550918579101562}, {y: 2.322246551513672, x: 0.47023528814315796}, {y: 1.230211615562439, x: 1.277423620223999}, {y: 2.3681747913360596, x: -0.10271748900413513}, {y: 1.2318501472473145, x: 1.277902603149414}, {y: 1.3266596794128418, x: -1.112966775894165}, {y: 1.844552755355835, x: -0.9191042184829712}, {y: 2.230579137802124, x: -0.5048121809959412}, {y: 0.38761815428733826, x: -0.8103733062744141}, {y: 0.38148176670074463, x: -0.8051797747612}, {y: 2.3198914527893066, x: 0.47639352083206177}, {y: 2.0223381519317627, x: 0.9502403736114502}, {y: 2.3809406757354736, x: 0.006475094705820084}, {y: 1.6700764894485474, x: 1.1882023811340332}, {y: 0.7881633639335632, x: -1.055057168006897}, {y: 1.847501277923584, x: -0.9158264994621277}, {y: 1.7564647197723389, x: 1.1471352577209473}, {y: 2.1231555938720703, x: -0.6615351438522339}, {y: 1.2317030429840088, x: 1.2778970003128052}, {y: 1.33179771900177, x: -1.1121705770492554}, {y: 1.6658958196640015, x: -1.017531394958496}, {y: 0.38237464427948, x: -0.806623101234436}, {y: 2.38157057762146, x: 0.019981827586889267}, {y: 1.0500317811965942, x: -1.1158891916275024}, {y: 2.222637176513672, x: -0.5179259777069092}, {y: 1.3675810098648071, x: -0.0014646050985902548}, {y: 1.1502678394317627, x: 0.1418791264295578}, {y: 1.3675814867019653, x: -0.0014653245452791452}, {y: 1.2244576215744019, x: 0.29009947180747986}, {y: 1.334849238395691, x: -0.006591414101421833}, {y: 1.1168948411941528, x: 0.06503193825483322}, {y: 1.1168947219848633, x: 0.06503205746412277}, {y: 1.150268793106079, x: 0.14187902212142944}, {y: 1.1502690315246582, x: 0.1418788731098175}, {y: 1.1168946027755737, x: 0.06503233313560486}, {y: 1.1168943643569946, x: 0.06503206491470337}, {y: 1.1168948411941528, x: 0.06503289937973022}, {y: 1.1502692699432373, x: 0.14188086986541748}, {y: 1.1168944835662842, x: 0.06503123790025711}, {y: 1.1502697467803955, x: 0.1418808102607727}, {y: 1.150267481803894, x: 0.14187632501125336}, {y: 1.1168947219848633, x: 0.06503298133611679}, {y: 1.1502685546875, x: 0.14187835156917572}, {y: 1.1168947219848633, x: 0.0650317370891571}, {y: 1.1168948411941528, x: 0.06503178179264069}, {y: 1.116894006729126, x: 0.06503234803676605}, {y: 1.116894245147705, x: 0.06503206491470337}, {y: 1.1168938875198364, x: 0.06503123790025711}, {y: 1.116894006729126, x: 0.06503227353096008}, {y: 1.116895318031311, x: 0.06503287702798843}, {y: 1.1502691507339478, x: 0.1418810337781906}, {y: 1.1168948411941528, x: 0.06503268331289291}, {y: 1.1502708196640015, x: 0.14187924563884735}, {y: 1.1502693891525269, x: 0.14187845587730408}, {y: 1.1502699851989746, x: 0.1418808102607727}, {y: 1.1168941259384155, x: 0.06503216922283173}, {y: 1.116894006729126, x: 0.06503161787986755}, {y: 1.1502680778503418, x: 0.14188016951084137}, {y: 1.1502703428268433, x: 0.14187978208065033}, {y: 1.150269865989685, x: 0.14188088476657867}, {y: 1.116894245147705, x: 0.06503278017044067}, {y: 1.1168948411941528, x: 0.06503240764141083}, {y: 1.1168947219848633, x: 0.06503085792064667}, {y: 1.1168948411941528, x: 0.06503240764141083}, {y: 1.1502689123153687, x: 0.14187730848789215}, {y: 1.150269865989685, x: 0.1418788880109787}, {y: 1.116894245147705, x: 0.06503336131572723}, {y: 1.1502692699432373, x: 0.14187778532505035}, {y: 1.150269627571106, x: 0.14187948405742645}, {y: 1.1502684354782104, x: 0.14187683165073395}, {y: 1.1168943643569946, x: 0.06503195315599442}, {y: 1.116895318031311, x: 0.06503286212682724}, {y: 1.1502680778503418, x: 0.14187781512737274}, {y: 1.1502692699432373, x: 0.14188072085380554}, {y: 1.1502684354782104, x: 0.14187897741794586}, {y: 1.150269627571106, x: 0.14187973737716675}, {y: 1.150269627571106, x: 0.1418790966272354}, {y: 1.1168951988220215, x: 0.065032958984375}, {y: 1.1168946027755737, x: 0.06503158807754517}, {y: 1.1502677202224731, x: 0.1418774127960205}, {y: 1.116894006729126, x: 0.06503190845251083}, {y: 1.1502695083618164, x: 0.14187876880168915}, {y: 1.1502691507339478, x: 0.1418786346912384}, {y: 1.1502680778503418, x: 0.1418779194355011}, {y: 1.1502699851989746, x: 0.14187957346439362}, {y: 1.150266408920288, x: 0.1418779343366623}, {y: 1.1168949604034424, x: 0.06503221392631531}, {y: 1.1502686738967896, x: 0.14187981188297272}, {y: 1.1168948411941528, x: 0.06503234058618546}, {y: 1.1502704620361328, x: 0.14188174903392792}, {y: 1.1168951988220215, x: 0.06503263860940933}, {y: 1.1502691507339478, x: 0.14187954366207123}, {y: 1.1502692699432373, x: 0.14187933504581451}, {y: 1.1502692699432373, x: 0.1418781727552414}, {y: 1.116894006729126, x: 0.06503230333328247}, {y: 1.3675817251205444, x: -0.0014653261750936508}]}
        />
        </VictoryChart>
        }
        {!this.state.showData &&
          <div style={{height: '300px', width: '450px'}}>
            <p key="p" style={{fontSize: '20px', margin: '30px'}}>
              Click on Table cells to Generate Graph
            </p>
          </div>
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
