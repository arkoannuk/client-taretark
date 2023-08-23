import {
  createStyles,
  Image,
  Container,
  Title,
  Text,
  List,
  ThemeIcon,
  rem,
} from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  topWrapper: {
    padding: 0,
    marginTop: rem(50),
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    // borderTop: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]}`,
  },

  container: {
  },

  inner: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: `calc(${theme.spacing.xl} * 4)`,
    paddingBottom: `calc(${theme.spacing.xl} * 1)`,

    [theme.fn.smallerThan('md')]: {
      // display: 'grid',
      flexDirection: 'column',
      alignItems: 'flex-start'
    },
  },

  content: {
    // maxWidth: rem(480),
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan('md')]: {
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(35),
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(28),
    },
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      flex: 1,
    },
  },

  image: {
    maxWidth: rem(550),
    [theme.fn.smallerThan('md')]: {
      marginTop: rem(30),

    },
  },

  highlight: {
    position: 'relative',
    backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
    borderRadius: theme.radius.sm,
    padding: `${rem(4)} ${rem(12)}`,
  },
}));

export function ValueProp1() {
  const { classes } = useStyles();
  return (
    <div>
      <Container fluid className={classes.topWrapper}>
        <Container size="lg" className={classes.container}>
          <div className={classes.inner}>
            <div className={classes.content}>
              <Title className={classes.title}>
                Ruumi hingata ja puhata
              </Title>
              <Text color="dimmed" mt="md">
                Build fully functional accessible web applications faster than ever – Mantine includes
                more than 120 customizable components and hooks.
              </Text>
              <List
                mt={rem(30)}
                spacing="sm"
                size="sm"
                icon={
                  <ThemeIcon size={20} radius="xl">
                    <IconCheck size={rem(12)} stroke={1.5} />
                  </ThemeIcon>
                }
              >
                <List.Item>
                  <b>Avatud Aed</b> – build type safe applications, all components and hooks
                  export types
                </List.Item>
                <List.Item>
                  <b>Grillmaja</b> – all packages have MIT license, you can use Mantine in
                  any project
                </List.Item>
                <List.Item>
                  <b>Saunad</b> – focus ring will appear only when user navigates with
                  keyboard
                </List.Item>
              </List>
            </div>
            <Image src='https://images.pexels.com/photos/3060930/pexels-photo-3060930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Random image' radius="md" className={classes.image} />
          </div>
        </Container>
      </Container>
    </div>
  );
}
