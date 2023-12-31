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

const useStyles = createStyles((theme) => ({
  topWrapper: {
    padding: 0,
    marginTop: rem(50),
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[1],
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
                spacing="md"
                size="sm"
  center
                icon={
                  <ThemeIcon size={9} radius="xl">
                  </ThemeIcon>
                }
              >
                <List.Item>
                  <b>Avatud aed</b> – kus leidub siiski igale grupile oma privaatne nurgake
                </List.Item>
                <List.Item>
                  <b>Grillmaja</b> – tasuta kasutamiseks eelbroneeringu alusel
                </List.Item>
                <List.Item>
                  <b>Saunad</b> – kohapeal on saadaval tava- ja tünnisauna teenused
                </List.Item>
                <List.Item>
                  <b>Isiklik vastuvõtt</b> – esmasel saabumisel tutvustame põgusalt majutusala
                </List.Item>
              </List>
            </div>
            <Image src='https://images.unsplash.com/photo-1440013152285-4af9cff35d94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1168&q=80' alt='Random image' radius="md" className={classes.image} />
          </div>
        </Container>
      </Container>
    </div>
  );
}
