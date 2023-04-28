import { render } from 'solid-testing-library';
import NavBar from '../NavBar';
import { Router } from '@solidjs/router';

describe('NavBar Component', () => {
    it('renders', () => {
        const { getByText, unmount} = render(() => {
            return <Router><NavBar /></Router>;
        })

        expect(getByText('Home')).toBeVisible()
        expect(getByText('Head to Head')).toBeVisible()
        unmount()
    })

})