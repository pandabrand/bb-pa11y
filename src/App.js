import React from 'react';
import './App.css';
import Header from './components/header';
import Overview from './components/overview';
import ReportItems from './components/report-items';
import small from './data/small.json';

class App extends React.Component {

  render() {
    const results = small.results;
    return (
      <div className="container">
        <Header />
        <Overview total={small.total} passes={small.passes} errors={small.errors}/>
        <ReportItems item={results} />
      </div>
    );
  }
}

export default App;
