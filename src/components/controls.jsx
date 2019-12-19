import React from 'react';

class Controls extends React.Component {
    render() {
        return (
            <div className="flex m-4">
                <div className="w-full p-1"><button className="btn btn-blue">Start Test</button><div className="messages px-2"></div></div>
            </div>
        )
    }
}

export default Controls;