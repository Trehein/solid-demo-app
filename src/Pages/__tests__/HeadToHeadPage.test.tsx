import { render } from 'solid-testing-library';
import HeadToHeadPage from '../HeadToHeadPage';

describe('test', () => {
    it('renders', () => {
        const { getByText, unmount} = render(() => {
            return <HeadToHeadPage />;
        })

        expect(getByText('HeadToHeadPage')).toBeVisible()
        unmount()
    })

})