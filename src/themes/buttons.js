export default {
  buttonDefault: (color, secondColor = '#00AFBE') => ({
    position: 'relative',
    borderColor: color,
    borderRadius: 6,
    padding: [10, 20],
    background: 'transparent',
    color,
    transition: 'all 0.5s ease',
    zIndex: 1,
    '&:hover': {
      color: secondColor,
      '&:before': {
        width: '100%',
      },
    },
    '&:before': {
      content: '\'\'',
      borderRadius: 4,
      position: 'absolute',
      left: 0,
      top: 0,
      width: 0,
      height: '100%',
      backgroundColor: color,
      transition: 'all 0.5s ease',
      zIndex: -1,
    },
  }),
};
