export default theme => ({
  inputIcon: {
    position: 'relative',
    '& input': {
      paddingLeft: 35,
      background: 'transparent',
      borderBottom: `1px solid ${theme.colors.white}`,
      '&::placeholder': {
        color: theme.colors.white,
      },
    },
    '& .icon': {
      color: theme.colors.white,
      position: 'absolute',
      fontSize: '1.8rem',
      top: '50%',
      left: 5,
      transform: 'translateY(-62%)',
    },
  },
});
