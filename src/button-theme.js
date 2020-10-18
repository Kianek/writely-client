function buttonTheme({ colors, container }) {
  return {
    base: {
      backgroundColor: colors.primary,
      border: `solid 1px ${colors.primary}`,
      borderRadius: '4px',
      color: `${colors.darkGray}`,
      fontSize: '1rem',
      padding: '0.75rem',
      outline: 'none',
      textDecoration: 'none',
      textAlign: 'center',
      '&:hover': {
        backgroundColor: colors.white,
        boxShadow: 'none',
        cursor: 'pointer',
      },
    },
    outline: {
      border: `solid 1px ${colors.lightGray}`,
      backgroundColor: colors.primary,
      boxShadow: 'none',
      '&:hover': {
        backgroundColor: colors.white,
      },
    },
    flat: {
      boxShadow: 'none',
    },
    disabled: {
      backgroundColor: colors.white,
      border: `solid 1px ${colors.lightGray}`,
      color: colors.darkGray,
      '&:hover': {
        backgroundColor: colors.white,
        cursor: 'not-allowed',
      },
    },
    toggled: {
      backgroundColor: colors.white,
    },
    success: {
      backgroundColor: colors.white,
      border: `solid 1px ${colors.success}`,
      color: colors.success,
      '&:hover, &.toggled': {
        color: colors.white,
        backgroundColor: colors.success,
      },
    },
    danger: {
      backgroundColor: colors.white,
      border: `solid 1px ${colors.danger}`,
      color: colors.danger,
      '&:hover, &.toggled': {
        color: colors.white,
        backgroundColor: colors.danger,
      },
    },
    info: {
      backgroundColor: colors.white,
      border: `solid 1px ${colors.info}`,
      color: colors.info,
      '&:hover, &.toggled': {
        color: colors.white,
        backgroundColor: colors.info,
      },
    },
    small: {
      fontSize: '0.9rem',
      padding: '0.7rem',
    },
    large: {
      fontSize: '1.2rem',
      padding: '1.2rem',
    },
    branding: {
      fontFamily: `'Nunito', Arial, Helvetica, sans-serif`,
      marginRight: 'auto',
      '&:hover': {
        backgroundColor: colors.primary,
      },
    },
    block: container.block,
  };
}

export default buttonTheme;
