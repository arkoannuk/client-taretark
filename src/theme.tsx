import { ReactNode } from 'react';
import { MantineProvider, DEFAULT_THEME, } from '@mantine/core';

const themeConfig = {
  // Other theme properties...

  defaultGradient: {
    from: DEFAULT_THEME.colors.teal[6],
    to: DEFAULT_THEME.colors.green[6],
    deg: 45,
  },

  primaryColor: 'teal'
};

type MantineThemeProviderProps = {
  children: ReactNode;
};

const MantineThemeProvider = ({ children }: MantineThemeProviderProps) => {
  return <MantineProvider theme={themeConfig}>{children}</MantineProvider>;
};

export default MantineThemeProvider;
