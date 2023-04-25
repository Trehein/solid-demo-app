import { render, fireEvent } from 'solid-testing-library';
import App from '../App';


describe('test', () => {
    it('renders', () => {
        const { getByText, unmount} = render(() => {
            return <App />;
        })

        expect(getByText('Learn Solid')).toBeVisible()
        unmount()
    })

})