import { createStyles, Container, Title, rem, Button, Flex, BackgroundImage, Paper } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  container: {
    paddingBottom: `calc(${theme.spacing.xl} * 3)`,
    paddingTop: `calc(${theme.spacing.xl} * 3)`,
    // backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[1],
    [theme.fn.smallerThan('md')]: {
      paddingTop: '0px'
    },
  },

  title: {
    color: theme.white,
    paddingBottom: `calc(${theme.spacing.xl} * 3)`,
    fontSize: rem(40),
    fontWeight: 900,
    lineHeight: 1.1,

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(35),
      lineHeight: 1.2,
    },

    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(28),
      lineHeight: 1.3,
    },
  },

  control: {
    // marginTop: `calc(${theme.spacing.xl} * 1.5)`,
    height: rem(54),
    [theme.fn.smallerThan('sm')]: {
      width: '95%',
    },
  },

  card: {
    // paddingTop: rem(70),
    // paddingBottom: rem(70),
  },

  image: {
    paddingTop: rem(120),
    paddingBottom: rem(120),
  },
}));

export function ActionCall() {
  const { classes } = useStyles();

  return (

    <Container size="lg" className={classes.container}>
      <Paper className={classes.card} radius="md">
        <BackgroundImage
          src="https://res.cloudinary.com/dgjfea9cb/image/upload/v1692889068/Group_5_xxervd.jpg"
          radius="md"
          className={classes.image}
        >
          <Flex direction='column' align='center'>
            <Title align='center' className={classes.title}>Parim majutus Elvas teie käsutusse</Title>
            <Button variant="gradient" radius='md' size="xl" className={classes.control}>
              Broneeri
            </Button>
          </Flex>
        </BackgroundImage>
      </Paper>
      


    </Container>
  );
}


{/* <Card withBorder className={classes.card}>
        <BackgroundImage
          src="https://images.pexels.com/photos/3060930/pexels-photo-3060930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          radius="md"
          className={classes.image}
        >
          <Flex direction="column" align="center">
            <Title align='center' className={classes.title}>Parim majutus Elvas teie käsutuses</Title>
            <Button variant="gradient" radius='md' size="xl" className={classes.control}>
              Broneering
            </Button>
          </Flex>
        </BackgroundImage>
      </Card> */}