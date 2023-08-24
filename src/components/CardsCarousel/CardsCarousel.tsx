import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { createStyles, Paper, Text, Title, useMantineTheme, rem, Container, Image, Group } from '@mantine/core';
import { IconStarFilled, IconStarHalfFilled } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({

  wrapper: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
  },

  // topWrapper: {
  //   backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
  //   borderTop: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]}`,
  //   borderBottom: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]}`,
  // },

  card: {
    height: rem(240),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    [theme.fn.smallerThan('md')]: {
      height: rem(320),
    },
  },

  title: {
    // fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    // fontWeight: 450,
    // lineHeight: 1.2,
    // fontSize: rem(18),
    marginTop: theme.spacing.xs,
    textAlign: 'center',
  },

  title2: {
    paddingBottom: `calc(${theme.spacing.xl} * 1)`,
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

  category: {
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
    textAlign: 'center',
  },

  containerTwo: {
    paddingTop: rem(100),
    paddingBottom: rem(100),

    [theme.fn.smallerThan('sm')]: {
    },
  },

  image: {
    maxWidth: rem(250),
    [theme.fn.smallerThan('md')]: {
      marginTop: rem(30),

    },
  },

  reviews: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    marginTop: '4rem',
    marginBottom: '4rem',

    [theme.fn.smallerThan('sm')]: {
      gap: '1rem',
      marginTop: '1rem',
      marginBottom: '1rem',
    },
  },

  carousel: {
    // borderTop: `${rem(1)} solid ${
    //   theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    // }`,
    // borderBottom: `${rem(1)} solid ${
    //   theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    // }`,
  }

}));

interface CardProps {
  title: string;
  category: string;
}

function Card({ title, category }: CardProps) {
  const { classes } = useStyles();

  return (
    <Paper
      className={classes.card}
    // withBorder
    >
      <div>
        <Text ml={0} className={classes.category} size="xs">
          {category}
        </Text>
        <Text mx={35} className={classes.title}>
          {title}
        </Text>
      </div>
    </Paper>
  );
}

const data = [
  {
    title: 'We had such an enjoyable stay here - the pictures don’t do it justice! The surroundings and interior are really lovely - we especially liked the bathroom. The weather was hot on some nights so the air conditioning was very welcome. Arko communicated with us extremely well and we would be very happy to stay here again!',
    category: 'Adela & John – 2023 June',
  },
  {
    title: "Arko's place is incredibly cosy and if you're not careful, you might struggle to make the already generous checkout time. The sauna, although modest in size, rapidly gets up to a scorching temperature which makes for a perfect opportunity to cool yourself down in the pond - even better if it's frozen over with a hole cut through the ice!",
    category: 'Siim – 2022 December',
  },
  {
    title: 'Very nice studio and host in a quiet street near all essential stores and good restaurants. Also the lakes and forests are gorgeous! Thanks Arko and family for shoveling the snow everyday and giving us chocolat 👍',
    category: 'Michiel - 2022 February',
  },
  {
    title: "Super location, nice view! Very beautiful and big shower. A couple of steps from the studio is a sauna. I loved it that there was a big bed, and needless to say the chill area with a couch and TV. Large windows, with private views of the outdoors. Nice to meet you, we felt so welcomed!!",
    category: 'Gristel - 2022 February',
  },
  {
    title: 'Host was very friendly, explained everything what and were can be found. Place was clean and with access to pond. Personal parking spot. Loved that outside tub and would definitely suggest it. Easy communication before the arrival.',
    category: 'Mārtiņš - 2021 August',
  },
  {
    title: 'This place is amazing!! Totally recommend! Location is super, just a few minutes from center and the place itself was very beautiful with big garden! The hosts were such a nice people! They really were spreading positive energy to us and we just loved them and the place :) ! Thank you so much!',
    category: 'Birgit - 2019 July',
  },
];

export function CardsCarousel() {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const tablet = useMediaQuery(`(max-width: ${theme.breakpoints.lg})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    //    <Container fluid className={classes.topWrapper}>
    <Container size="lg" className={classes.containerTwo}>
      <Title align="center" className={classes.title2}>Mida arvavad meist meie kliendid?</Title>
      <div className={classes.reviews}>
        <div>
          <Image src='https://res.cloudinary.com/dgjfea9cb/image/upload/v1692862588/Group_3_zyjeaa.png' alt='Random image' radius="md" className={classes.image} />
          <Group position='center' mt={rem(15)} spacing='1px'>
            <IconStarFilled />
            <IconStarFilled />
            <IconStarFilled />
            <IconStarFilled />
            <IconStarHalfFilled />
          </Group>
          <Text align='center' mt={rem(15)}><b>(40+ Reviews)</b></Text>
        </div>
        <div>
          <Image src='https://res.cloudinary.com/dgjfea9cb/image/upload/v1692862586/Group_4_sf6uis.png' alt='Random image' radius="md" className={classes.image} />
          <Group position='center' mt={rem(15)} spacing='1px'>
            <IconStarFilled />
            <IconStarFilled />
            <IconStarFilled />
            <IconStarFilled />
            <IconStarHalfFilled />
          </Group>
          <Text align='center' mt={rem(15)}><b>(35+ Reviews)</b></Text>
        </div>
      </div>
      <Carousel
        className={classes.carousel}
        controlsOffset="xs"
        slideSize="33.33%"
        breakpoints={[{ maxWidth: 'lg', slideSize: '50%', slideGap: "xs" }, { maxWidth: 'sm', slideSize: '100%', slideGap: rem(0) }]}
        slideGap="xs"
        align="center"
        slidesToScroll={mobile ? 1 : (tablet ? 2 : 3)}
        loop
      >
        {slides}
      </Carousel>
    </Container>
    //    </Container>
  );
}
