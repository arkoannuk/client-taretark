import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { createStyles, Paper, Text, Title, useMantineTheme, rem, Container } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(220),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',

    [theme.fn.smallerThan('md')]: {
      height: rem(280),
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 450,
    lineHeight: 1.2,
    fontSize: rem(18),
    marginTop: theme.spacing.xs,
    textAlign: 'center',
  },

  category: {
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
    textAlign: 'center',
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
      height: rem(300),
      paddingBottom: `calc(${theme.spacing.xl} * 3)`,
    },
  },
}));

interface CardProps {
  title: string;
  category: string;
}

function Card({title, category }: CardProps) {
  const { classes } = useStyles();

  return (
    <Paper
      className={classes.card}
    >
      <div>
        <Text ml={23} className={classes.category} size="xs">
          {category}
        </Text>
        <Title mx={45} order={3} className={classes.title}>
          {title}
        </Title>
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
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Container pt={80} pb={50}>
      <Carousel
        slideSize="50%"
        breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: rem(0) }]}
        slideGap="xs"
        align="center"
        slidesToScroll={mobile ? 1 : 2}
      >
        {slides}
      </Carousel>
    </Container>
  );
}
