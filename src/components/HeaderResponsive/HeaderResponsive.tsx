import { useState } from 'react';
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  rem,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantine/ds';
import { LanguagePicker } from '../LanguagePicker/LanguagePicker';
import { Link, useLocation } from "react-router-dom";
import { useLanguageContext } from '../../contexts/LanguageContext';
import React from 'react';

const HEADER_HEIGHT = rem(60);

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: 1,

    [theme.fn.smallerThan('sm')]: {
      position: 'sticky',
      zIndex: 9999,
    },
  },

  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  wrapper: {
    display: 'flex',
    justifyContent: 'end',
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}));

interface HeaderResponsiveProps {
  links: { link: string; label: string; labelEn: string; }[];
}

export function HeaderResponsive({ links }: HeaderResponsiveProps) {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();
  const { selectedLabel } = useLanguageContext();

  const location = useLocation();
  const items = links.map((link) => {
    const modifiedLink = selectedLabel === 'En'
      ? link.link.replace('/ee', '/en')
      : link.link.replace('/en', '/ee');

    return (
      <Link
        key={link.label}
        to={modifiedLink}
        className={cx(classes.link, { [classes.linkActive]: active === modifiedLink })}
        onClick={() => {
        }}
      >
        {selectedLabel === 'En' ? link.labelEn : link.label}
      </Link>
    );
  });

  React.useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  const modifiedLogoLink = selectedLabel === 'En' ? '/en' : '/ee';

  return (
    <Header height={HEADER_HEIGHT} className={classes.root}>
      <Container fluid className={classes.header}>
        <Link to={modifiedLogoLink} className={classes.wrapper}>
          <MantineLogo size={28} />
        </Link>
        <div className={classes.wrapper}>
          <Group spacing={5} className={classes.links}>
            {items}
          </Group>
          <LanguagePicker />
          <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" ml='0.5rem' />
        </div>

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}
