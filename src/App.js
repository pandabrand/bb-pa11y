import React from 'react';
import './App.css';
import Header from './components/header';
import Overview from './components/overview';
import ReportItems from './components/report-items';
import Controls from './components/controls';
import Pagination from 'react-js-pagination';
import small from './data/small.json';
import sitemap from './data/sitemap.json';
import { db } from './firebase';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.state = {
      site: {},
      urls: [],
      count: 0,
      page: 1
    };
  }

  componentDidMount() {
    db.collection('sites')
      .doc('bluebottlecoffee')
      .get()
      .then(doc => {
        const data = doc.data();
        this.setState({ site: data });
      })

    db.collection('sites')
      .doc('bluebottlecoffee')
      .collection('urls')
      .get()
      .then(doc => { 
        if(doc.empty) {
          console.log('Urls are empty attempting to add them to the db')
          this.add_urls();
        } else {
          this.setState({count: doc.size});
          this.dataPagination();
        }
      })
      .catch(err => { console.log('error getting/updating collection', err) });
  }

  add_urls() {
    sitemap.url.forEach(element => {
      db.collection('sites')
        .doc('bluebottlecoffee')
        .collection('urls')
        .add(element)
        .then(() => {console.log('Added ' + element.loc)})
        .catch(err => { console.error('Error adding ' + element.loc, err) })
    });
  }

  dataPagination(pageNumber = 1) {
    let startNum = (pageNumber - 1) * 10;
    console.log(startNum);
    let snapshot = db.collection('sites')
      .doc('bluebottlecoffee')
      .collection('urls')
      .orderBy('loc')
      .startAt(startNum);
      
    snapshot.limit(10).get().then(query => {
      const data = query.docs.map(doc => doc.data());
      this.setState({ 
        urls: data,
        pageNumber: pageNumber
      });
    });
  }
  
  handlePageChange(pageNumber) {
    this.dataPagination(pageNumber);
  }

  render() {
    return (
      <div className="container">
        <Header site={this.state.site} />
        <Overview total={small.total} passes={small.passes} errors={small.errors}/>
        <Controls />
        <ReportItems results={this.state.urls} />
        <Pagination activePage={this.state.page} itemsCountPerPage={10} totalItemsCount={this.state.count} pageRangeDisplayed={5} onChange={this.handlePageChange} />
      </div>
    );
  }
}

export default App;
