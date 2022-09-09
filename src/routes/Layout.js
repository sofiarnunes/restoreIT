import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';


class Layout extends Component {
    render() {
        return (
            <main>
                {/* rendering of child components */}
                <Outlet/>
            </main>
        );
    }
}

export default Layout;