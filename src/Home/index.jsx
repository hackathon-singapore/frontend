import React from 'react';
import DocumentTitle from 'react-document-title';
import Header from './Header';
import Banner from './Banner';
import Page1 from './Page1';
import Page2 from './Page2';
// import Page3 from './Page3';
import Page4 from './Page4';
import Footer from './Footer';
import './static/style';
import Dashboard from '../Dashboard';

class Home extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      showDashboard: false
    }
  }
  handleDashboardRouting = () => {
    //this.setState(prevState => ({showDashboard: !prevState.showDashboard}))
    this.setState({showDashboard: !this.state.showDashboard})
  }
  render() {
    return (

      <div className="home-page">
        {!this.state.showDashboard && <div>
          <Header key="header" />
          <Banner handleDashboardRouting= {this.handleDashboardRouting} key="banner" />
          <Page1 key="page1" />
          <Page2 key="page2" />
          <Page4 key="page4" />
          <Footer key="footer" />
          <DocumentTitle title="Indigenous language dashobard" />
        </div>}
        {this.state.showDashboard && <Dashboard handleDashboardRouting= {this.handleDashboardRouting}/>}
      </div>
    );
  }
}
export default Home;
