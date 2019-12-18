import React from 'react';

class ReportItems extends React.Component {
    render() {
        let results = Object.values(this.props.item);
        let reportNodes = results[0].map(
            function(node, index) {
                return <div key={index} className="w-full bg-gray-500 mb-8 p-3">
                    <div className="text-lg text-white">{node.code}</div>
                    <div className="text-red-800 text-bold">{node.type}</div>
                    <div>{node.message}</div>
                    <div>{node.context}</div>
                    <div>{node.selector}</div>
                </div>;
            }
        )
        return <div className="mt-5 flex flex-wrap">{reportNodes}</div>;
    }
}

export default ReportItems;