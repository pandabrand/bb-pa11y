import React from 'react';

class ReportItems extends React.Component {
    render() {
        // results as of now should only have one keyed array
        let reportNodes = this.props.results.map(
            function(node, index) {
                return <div key={index} className="w-full bg-gray-500 mb-8 p-3">
                    <div className="text-lg text-white p-1">{node.loc}</div>
                    {/* <div className="text-red-800 font-bold p-1">{node.type}</div>
                    <div className="p-2">{node.message}</div>
                    <div className="p-2">{node.context}</div>
                    <div className="bg-orange-200 p-4 text-red">{node.selector}</div> */}
                </div>;
            }
        )
        return <div className="mt-5 flex flex-wrap">{reportNodes}</div>;
    }
}

export default ReportItems;