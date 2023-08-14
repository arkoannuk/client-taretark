import { createStyles, Overlay, Container, Title, Button, Text, rem } from '@mantine/core';
import { FormattedMessage } from 'react-intl';

const useStyles = createStyles((theme) => ({
  hero: {
    position: 'relative',
    backgroundImage:
      'url(https://images.pexels.com/photos/3060930/pexels-photo-3060930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  container: {
    height: rem(500),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingBottom: `calc(${theme.spacing.xl} * 6)`,
    zIndex: 1,
    position: 'relative',

    [theme.fn.smallerThan('sm')]: {
      height: rem(500),
      paddingBottom: `calc(${theme.spacing.xl} * 3)`,
    },
  },

  title: {
    color: theme.white,
    fontSize: rem(60),
    fontWeight: 900,
    lineHeight: 1.1,

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(40),
      lineHeight: 1.2,
    },

    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(28),
      lineHeight: 1.3,
    },
  },

  description: {
    color: theme.white,
    maxWidth: 600,

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
      fontSize: theme.fontSizes.sm,
    },
  },

  control: {
    marginTop: `calc(${theme.spacing.xl} * 1.5)`,
    height: rem(54),
    [theme.fn.smallerThan('sm')]: {
      width: '100%',
    },
  },
}));

export function HeroContentLeft() {
  const { classes } = useStyles();

  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container size="lg" className={classes.container}>
        <Title className={classes.title}><FormattedMessage
            id="heroContentLeft-title"
            defaultMessage="Accommodation in Elva"
          />
        </Title>
        <Text className={classes.description} size="xl" mt="xl">
          Create lasting memories and experience Estonian hospitality. Make new connections, and feel at home away from home.
          Book now to embark on a journey of  exploration.
          <br></br>Welcome to TareTark.
        </Text>

        <Button variant="gradient" size="xl" className={classes.control}>
          View Rooms
        </Button>
      </Container>
    </div>
  );
}
