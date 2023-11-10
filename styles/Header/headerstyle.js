import headerTheme from "../../Theme/HeaderTheme";

const headerStyles = {
    navBarStyles: {
        item: true,
        container: true,
        xs: 'auto',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'left',
        justifyContent: 'space-around',
        width: '23%',
        height: '84px'
    },

    appbarStyles: {
        position: 'sticky',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: headerTheme.palette.primary,
        boxShadow: 'none',
        height: '85px',
        padding: '0 40px',
    },
    appbarGridContainer: {
        container: true,
        width: '100%',
        height: '84px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    navbarItem: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative'
    },
    navBarText: {
        color: headerTheme.palette.secondary,
        textDecoration: 'none',
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: 700,
        paddingTop: '28px',
    },
    linkTextWrap: {
        height: '84px',
        justifyContent: 'space-between',
        alignItems: 'left',
        display: 'flex',
        flexDirection: 'column',
        '#linkTextLine': {
            width: '110%',
            height: '4px',
            flexShrink: '0',
            borderRadius: '2px 2px 0px 0px',
            background: headerTheme.palette.primary,
        },
        ':hover': {
            '#linkText': {
                background: headerTheme.palette.highlight,
                backgrounClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
            },
            '#linkTextLine': {
                background: headerTheme.palette.highlight
            }
        }
    },
    linkTextWrapActive: {
        height: '84px',
        justifyContent: 'space-between',
        alignItems: 'left',
        display: 'flex',
        flexDirection: 'column',
        '#linkText': {
            textDecoration: 'none',
            fontSize: '20px',
            fontStyle: 'normal',
            fontWeight: 700,
            paddingTop: '28px',
            background: headerTheme.palette.highlight,
            backgrounClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
        },
        '#linkTextLine': {
            width: '110%',
            height: '4px',
            flexShrink: '0',
            borderRadius: '2px 2px 0px 0px',
            background: headerTheme.palette.highlight
        }
    },
    sideBar: {
        item: true,
        container: true,
        xs: 'auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 2,
    },
    sideButton: {
        display: 'flex',
        padding: '0px 10px',
        gap: '2px',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: '40px',
        border: '2px solid grey',
        height: '36px',
        width: '110px',
        color: headerTheme.palette.white,
    },

};

export default headerStyles;