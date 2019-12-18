import React from 'react';
import './App.css';
import Header from './components/header';
import Overview from './components/overview';
import ReportItems from './components/report-items';
import small from './data/small.json';

class App extends React.Component {

  render() {
    const results = small.results;
    const siteaddress = Object.keys(results)[0];
    return (
      <div className="container">
        <Header address={siteaddress} />
        <Overview total={small.total} passes={small.passes} errors={small.errors}/>
        <ReportItems results={results} />
      </div>
    );
  }
}

export default App;
