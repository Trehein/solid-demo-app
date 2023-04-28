import type { Component } from 'solid-js';
import { navBarStyles } from './navBarStyles';
import { A } from '@solidjs/router';

const NavBar: Component = () => {
    const navBarClasses = navBarStyles()
    return (
        <div style={navBarClasses.navBarContainer}>
            <div style={navBarClasses.linkContainer}>
                <A href={'/'} style={navBarClasses.link}>Home</A>
            </div>
            <div style={navBarClasses.linkContainer}>
                <A href={'/head-to-head'} style={navBarClasses.link}>Head to Head</A>
            </div>
        </div>
    )
}

export default NavBar
