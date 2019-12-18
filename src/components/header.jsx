import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header className="bg-gray-400 p-4 mb-2">
                <h1 className="text-xl text-center">{this.props.address}</h1>
            </header>
        );
    }
}

export default Header;