import React from 'react';
import axios from 'axios';

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
        axios.post('/.netlify/functions/reporter', {
            name: 'Fred'
        })
        .then(repsonse => {
            this.setState({disabled: false});
            console.dir(repsonse);
        })
        .catch(error => {
            this.setState({disabled: false});
            console.error(error);
        });
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