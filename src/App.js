import React from 'react';
import './App.css';
import Header from './components/header';
import Overview from './components/overview';
import ReportItems from './components/report-items';
import small from './data/small.json';
import { db } from './firebase';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      site: {}
    };
  }

  componentDidMount() {
    db.collection('sites')
      .where('name', '==', 'Blue Bottle Coffee')
      .get()
      .then(query => {
        const data = query.docs.map(doc => doc.data());
        this.setState({ site: data[0] });
      })
  }

  render() {
    const results = small.results;

    return (
      <div className="container">
        <Header site={this.state.site} />
        <Overview total={small.total} passes={small.passes} errors={small.errors}/>
        <ReportItems results={results} />
      </div>
    );
  }
}

export default App;
