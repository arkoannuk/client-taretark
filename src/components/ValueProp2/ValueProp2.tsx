import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Text,
  rem,
  Flex,
  List,
  ThemeIcon,
} from '@mantine/core';
import { Leaflet } from '../../Leaflet/Leaflet';
import { IconBus, IconCircleCheck, IconCircleDashed, IconMapPin, IconMapPinFilled, IconShoppingCart, IconTrain } from '@tabler/icons-react';

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
    paddingBottom: `calc(${theme.spacing.xl} * 1)`,

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
            <Leaflet />
            <div className={classes.content}>
              <Title className={classes.title} mb="md">
                Hästi ühendatud asukoht
              </Title>

              <Text mt="md" mb="md">
                Meie juurde pääseb lihtsalt nii auto kui ka ühistranspordiga, kõndimiskaugusele jäävad toidupoed ja restoranid.
              </Text>


              <List spacing="xs" size="sm" center >
                <List.Item
                  icon={
                    <ThemeIcon color="teal" size="lg" radius="xl">
                      <IconShoppingCart size="1.5rem" />
                    </ThemeIcon>
                  }
                >
                  Lähim toidupood <b>500m</b></List.Item>
                <List.Item
                  icon={
                    <ThemeIcon size="lg" radius="xl">
                      <IconBus size="1.5rem" />
                    </ThemeIcon>
                  }
                >
                  Lähim bussipeatus <b>1km</b></List.Item>
                <List.Item
                  icon={
                    <ThemeIcon size="lg" radius="xl">
                      <IconTrain size="1.5rem" />
                    </ThemeIcon>
                  }
                >
                  Elva raudteejaam <b>2km</b>
                </List.Item>
              </List>

              <Text mt="md" color='dimmed'>
                Kaardil on märgistatud olulisemad rajatised.
              </Text>


              <Button radius="md" size="md" className={classes.control}>
                <Flex gap="xs" justify="" align="center"
                >
                  <IconMapPinFilled /> Juhised
                </Flex>
              </Button>
            </div>
          </div>
        </Container>
      </Container>
    </div>
  );
}
