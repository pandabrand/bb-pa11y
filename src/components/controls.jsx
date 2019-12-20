import React from 'react';
import axios from 'axios';
import moment from 'moment';
import { db } from '../firebase';

class Controls extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({disabled: true});
        let testtime = moment().format('YYYYMMDDkkmmss');
        db.collection('sites')
            .doc('bluebottlecoffee')
            .collection('tests')
            .add({test_name: testtime})
            .then(ref => { 
                this.startTest(ref.id);
            });
    }

    startTest(test_id) {
        db.collection('sites')
            .doc('bluebottlecoffee')
            .collection('urls')
            .orderBy('loc')
            .limit(10)
            .get()
            .then(query => {
                query.docs.forEach(doc => { 
                    console.dir(doc());
                    axios.post('/.netlify/functions/reporter', doc.data())
                    .then(response => {
                        this.setState({disabled: false});
                        console.dir(response);
                        let results = response.data;
                        results.test_id = test_id
                        doc.collection('test_results')
                        .add(results);
                    })
                    .catch(error => {
                        this.setState({disabled: false});
                        console.error(error);
                    });
                });
            })

    }

    render() {
        return (
            <div className="flex m-4">
                <div className="w-full p-1"><button onClick={this.handleClick} disabled={this.state.disabled} className="btn btn-blue">Start Test</button><div className="messages px-2"></div></div>
            </div>
        )
    }
}

export default Controls;