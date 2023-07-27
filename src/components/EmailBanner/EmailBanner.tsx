import { createStyles, Text, TextInput, Button, Image, rem, Container } from '@mantine/core';
import image from './image.svg';
import { FormattedMessage } from 'react-intl'

const useStyles = createStyles((theme) => ({
  topWrapper: {
    paddingTop: rem(50),
    paddingBottom: rem(50),
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    borderTop: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]}`,
  },

  wrapper: {
    display: 'flex',
    alignItems: 'center',
    // padding: `calc(${theme.spacing.xl} * 2)`,
    // paddingLeft: `calc(${theme.spacing.xl} * 2)`,
    // paddingRight: `calc(${theme.spacing.xl} * 2)`,
    paddingTop: rem(0),
    paddingBottom: rem(0),
    borderRadius: theme.radius.md,
    // backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    // border: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[3]}`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column-reverse',
      // paddingLeft: theme.spacing.xl,
      // paddingRight: theme.spacing.xl,
    },
  },

  image: {
    maxWidth: '30%',

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '50%',
    },

    [theme.fn.smallerThan('xs')]: {
      maxWidth: '100%',
    },
  },

  body: {
    paddingRight: `calc(${theme.spacing.xl} * 4)`,

    [theme.fn.smallerThan('sm')]: {
      paddingRight: 0,
      marginTop: theme.spacing.xl,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
    marginBottom: theme.spacing.md,
  },

  controls: {
    display: 'flex',
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.xl,
  },

  inputWrapper: {
    width: '100%',
    flex: '1',
  },

  input: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRight: 0,
  },

  control: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
}));

export function EmailBanner() {
  const { classes } = useStyles();

  return (
      <Container fluid className={classes.topWrapper}>
        <Container size="lg" pb={0} pt={0} px={0}>
          <div className={classes.wrapper}>
            <div className={classes.body}>
              <Text fw={900} fz="xl" mb={5}>
                <FormattedMessage
                  id="emailBanner-header"
                  defaultMessage="Subscribe to our Newsletter!"
                />
              </Text>
              <Text fz="sm" c="dimmed">
                You will never miss out on discount deals, property updates and local events. We only send out emails once every few months.
              </Text>
              <div className={classes.controls}>
                <TextInput
                  placeholder="Your email"
                  classNames={{ input: classes.input, root: classes.inputWrapper }}
                />
                <Button variant="gradient" className={classes.control}>Subscribe</Button>
              </div>
              <Text fz="sm" c="dimmed">
                For contact information, <a href="">click here</a>
              </Text>
            </div>
            <Image src={image} className={classes.image} />
          </div>
        </Container>
      </Container>
  );
}
