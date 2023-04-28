export const navBarStyles = () => {
    return {
        navBarContainer: {
            position: 'fixed' as 'fixed',
            display: 'flex',
            alignItems: 'center',
            height: `${window.innerHeight * .05}px`,
            width: '100%',
            zIndex: 10,
            borderBottom: '1px solid black',
            backgroundColor: 'orange'
        },
        linkContainer: {
            margin: 'auto .5em',
        },
        link: {
            color: 'black'
        }
    }
}