import { render } from 'solid-testing-library';
import App from '../App';
import { Router } from '@solidjs/router';


describe('test', () => {
    it('renders', () => {
        const { getByText, unmount} = render(() => {
            return <Router><App /></Router>;
        })

        expect(getByText('Head to Head')).toBeVisible()
        unmount()
    })

})