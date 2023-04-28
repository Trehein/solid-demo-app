import type { Component } from 'solid-js';
import { pageStyles } from './pageStyles';

const HomePage: Component = () => {
    const pageClasses = pageStyles()
    return (
        <div style={pageClasses.pageContainer}>

        </div>
    )
}

export default HomePage
