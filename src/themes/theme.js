// Imports
import queryTheme from './mediaQueries';
import colorTheme from './colors';
import buttonTheme from './buttons';

export default {
  colorPrimary: 'green',
  panelLeft: (color, backgroundColor) => ({
    backgroundColor,
    color,
    position: 'absolute',
    height: '100%',
    zIndex: 1,
  }),
  panelRight: backgroundColor => ({
    overflowY: 'auto',
    backgroundColor,
    backgroundSize: 'cover',
    position: 'absolute',
    right: 0,
    height: '100%',
  }),
  panelLeftContainer: () => ({
    padding: 20,
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)',
  }),
  panelHeadline: (color, mediaQuery) => ({
    fontFamily: 'openSansCond',
    fontWeight: 600,
    fontSize: '2.4rem',
    letterSpacing: 1.5,
    marginBottom: 0,
    padding: 10,
    color,
    [mediaQuery.md]: {
      fontSize: '3rem',
    },
    [mediaQuery.lg]: {
      fontSize: '4rem',
    },
  }),
  panelSubHeadline: (color, mediaQuery) => ({
    fontFamily: 'openSansCond',
    fontWeight: 600,
    fontSize: '1.6rem',
    letterSpacing: 1.5,
    margin: [10, 0],
    color,
    [mediaQuery.md]: {
      fontSize: '2rem',
    },
    [mediaQuery.lg]: {
      fontSize: '2.4rem',
    },
  }),
  select: () => ({
    '& .css-1aya2g8, .css-2o5izw': {
      border: 'none',
      borderRadius: 0,
      margin: [10, 0],
    },
  }),
  colors: colorTheme.colors,
  mediaQueries: queryTheme.mediaQueries,
  buttonDefault: buttonTheme.buttonDefault,
};
