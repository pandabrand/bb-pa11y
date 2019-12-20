import React from 'react';

class Controls extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {

    }

    render() {
        return (
            <div className="flex m-4">
                <div className="w-full p-1"><button disabled={this.state.disabled} className="btn btn-blue">Start Test</button><div className="messages px-2"></div></div>
            </div>
        )
    }
}

export default Controls;