import React from 'react';

class Overview extends React.Component {
    render() {
        return (
            <div className="overview-container flex justify-center items-stretch mb-4">
                <div className="mr-2 flex-1">
                    <div className="rounded overflow-hidden shadow-lg">
                        <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Total Pages</div>
                        <div className="font-bold text-xl mb-2">{this.props.total}</div>
                    </div>
                </div>
                </div>
                <div className="mr-2 flex-1">
                    <div className="rounded overflow-hidden shadow-lg">
                        <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Passes</div>
                        <div className="font-bold text-xl mb-2">{this.props.passes}</div>
                    </div>
                </div>
                </div>
                <div className="mr-2 flex-1">
                    <div className="rounded overflow-hidden shadow-lg">
                        <div className="px-6 py-4">
                        <div className="font-bold text-xl text-red-800 mb-2">Errors</div>
                        <div className="font-bold text-xl text-red-800 mb-2">{this.props.errors}</div>
                    </div>
                </div>
                </div>
            </div>    
        );
    }
}

export default Overview;