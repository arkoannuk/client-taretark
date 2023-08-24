import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Text,
  rem,
} from '@mantine/core';

const useStyles = createStyles((theme) => ({
  topWrapper: {
    padding: 0,
    // marginTop: rem(50),
    //marginBottom: rem(500),
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[1],
    // borderTop: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]}`,
  },

  container: {
  },

  inner: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: `calc(${theme.spacing.xl} * 4)`,
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,

    [theme.fn.smallerThan('md')]: {
      // display: 'grid',
      flexDirection: 'column-reverse',
      alignItems: 'flex-start'
    },
  },

  content: {
    // maxWidth: rem(480),
    marginLeft: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan('md')]: {
      marginLeft: 0,
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
    marginTop: rem(15),
    // [theme.fn.smallerThan('xs')]: {
    //   flex: 1,
    // },
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

export function ValueProp2() {
  const { classes } = useStyles();
  return (
    <div>
      <Container fluid className={classes.topWrapper}>
        <Container size="lg" className={classes.container}>
          <div className={classes.inner}>
            <Image src='https://res.cloudinary.com/dgjfea9cb/image/upload/v1692889072/photo-1543269664-56d93c1b41a6_1_kfsvvu.jpg' alt='Random image' radius="md" className={classes.image} />
            <div className={classes.content}>
              <Title className={classes.title}>
                Murevaba igal sammul
              </Title>
              <Text mt="md">
                Ööbijatele klienditugi kättesaadaval 24/7 
              </Text>
              <Text color="dimmed" mt="md">
                Juhul kui tekivad küsimused või probleemid, oleme alati valmis neile vastuse leidma. Seda nii telefoni teel kui ka kohapeal.
              </Text>
              <Button radius="md" size="md" className={classes.control}>
                Kontakt & KKK
              </Button>
            </div>
          </div>
        </Container>
      </Container>
    </div>
  );
}
