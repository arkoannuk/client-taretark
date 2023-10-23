import { createStyles, Text, Container, ActionIcon, rem, Flex } from '@mantine/core';
import { IconBrandYoutube, IconBrandInstagram, IconMapPin } from '@tabler/icons-react';
import { MantineLogo } from '@mantine/ds';

const useStyles = createStyles((theme) => ({
  footer: {
    paddingTop: rem(50),
    paddingBottom: rem(50),
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    borderTop: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
      }`,
  },

  logo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'start',
    maxWidth: rem(250),

    [theme.fn.smallerThan('sm')]: {
      // display: 'flex',
      // flexDirection: 'column',
      maxWidth: '100vh',
      alignItems: 'center',
    },
  },

  description: {
    marginTop: rem(-15),

    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.md,
      marginBottom: theme.spacing.md,
      textAlign: 'center',
    },
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  groups: {
    display: 'flex',
    flexWrap: 'wrap',

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  links: {
    display: 'flex',
    flexWrap: 'wrap',

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'row',
    },
  },

  wrapper: {
    width: rem(160),
  },

  link: {
    display: 'block',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: rem(3),
    paddingBottom: rem(3),

    '&:hover': {
      textDecoration: 'underline',
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: `calc(${theme.spacing.xs} / 2)`,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },

  afterFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
      }`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  social: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
    },
  },

  socials: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.md,
      flexDirection: 'row',
      gap: rem(10),
    },
  },
}));

interface FooterLinksProps {
  data: {
    title: string;
    links: { label: string; link: string }[];
  }[];
}

export function FooterLinks({ data }: FooterLinksProps) {
  const { classes } = useStyles();

  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container size="lg" className={classes.inner}>
        <div className={classes.logo}>

          <MantineLogo size={30} />
          <Text size="xs" color="dimmed" className={classes.description}>
            Accommodation and recreational services since 2019.
          </Text>

          <Text color="dimmed" size="xs">
            © 2023 TareTark OÜ – All rights reserved.
          </Text>
        </div>
        <div className={classes.links}>
          <div className={classes.groups}>
            {groups}
            </div>
            <Flex className={classes.socials}>
              <ActionIcon color="teal" size="lg" radius="xl" variant="filled">
                <IconBrandInstagram size="1.55rem" stroke={1.7} />
              </ActionIcon>
              <ActionIcon color="teal" size="lg" radius="xl" variant="filled">
                <IconBrandYoutube size="1.55rem" stroke={1.7} />
              </ActionIcon>
              <ActionIcon color="teal" size="lg" radius="xl" variant="filled">
                <IconMapPin size="1.55rem" stroke={1.7} />
              </ActionIcon>
            </Flex>
        </div>

      </Container>
      {/* <Container size="lg" className={classes.afterFooter}>
        <Text color="dimmed" size="sm">
          © 2023 TareTark OÜ – All rights reserved.
        </Text>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon size="lg">
            <IconBrandTwitter size="1.05rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandYoutube size="1.05rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandInstagram size="1.05rem" stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container> */}
    </footer>
  );
}
