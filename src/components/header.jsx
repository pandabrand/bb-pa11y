import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header className="bg-gray-400 p-4 mb-2">
                <h1 className="text-xl font-bold text-center">{this.props.site.name}</h1>
                <h2 className="text-xl text-white text-center">{this.props.site.address}</h2>
            </header>
        );
    }
}

export default Header;