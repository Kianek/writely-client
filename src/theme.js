import buttonTheme from './button-theme';

const theme = {
  colors: {
    primary: '#ffe2f8',
    lightGray: '#d0cfcf',
    darkGray: '#565254',
    success: '#4adb26',
    info: '#0066ff',
    danger: '#ff0000',
    white: '#fff',
    black: '#000',
    shadow: 'rgba(0,0,0,0.2)',
    boxShadow: {
      boxShadow: '0 0 4px 3px rgba(0, 0, 0, 0.2)',
    },
  },
  container: {
    block: {
      display: 'block',
      width: '100%',
    },
  },
  flex: {
    column: {
      display: 'flex',
      flexDirection: 'column',
    },
    row: {
      display: 'flex',
      flexDirection: 'row',
    },
  },
  button: {},
};

const buttonThemes = buttonTheme(theme);
theme.button = buttonThemes;

export default theme;
