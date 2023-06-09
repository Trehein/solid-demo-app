import type { Component } from 'solid-js';
import { pageStyles } from './pageStyles';

const HeadToHeadPage: Component = () => {
    const pageClasses = pageStyles()
    return (
        <div style={pageClasses.pageContainer}>
            HeadToHeadPage
        </div>
    )
}

export default HeadToHeadPage
