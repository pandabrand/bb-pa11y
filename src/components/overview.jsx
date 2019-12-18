import React from 'react';

class Overview extends React.Component {
    render() {
        return (
            <div className="flex justify-center mb-4">
                <div className="mx-2">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Total</div>
                        <div className="font-bold text-xl mb-2">{this.props.total}</div>
                    </div>
                </div>
                </div>
                <div className="mx-2">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Passes</div>
                        <div className="font-bold text-xl mb-2">{this.props.passes}</div>
                    </div>
                </div>
                </div>
                <div className="mx-2">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <div className="px-6 py-4">
                        <div className="font-bold text-xl text-red-800 mb-2">Error</div>
                        <div className="font-bold text-xl text-red-800 mb-2">{this.props.errors}</div>
                    </div>
                </div>
                </div>
            </div>    
        );
    }
}

export default Overview;