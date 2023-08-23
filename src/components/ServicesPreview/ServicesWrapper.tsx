import { createStyles, Container, rem, Grid, Title } from '@mantine/core';
import { ServicePuhkemaja } from './Services/ServicePuhkemaja';

const useStyles = createStyles((theme) => ({
    container: {
        paddingBottom: `calc(${theme.spacing.xl} * 3)`,
        paddingTop: `calc(${theme.spacing.xl} * 3)`,
        [theme.fn.smallerThan('md')]: {
        },
    },
    title: {
        paddingBottom: `calc(${theme.spacing.xl} * 3)`,
        fontSize: rem(40),
        fontWeight: 900,
        lineHeight: 1.1,

        [theme.fn.smallerThan('sm')]: {
            fontSize: rem(35),
            lineHeight: 1.2,
        },

        [theme.fn.smallerThan('xs')]: {
            fontSize: rem(24),
            lineHeight: 1.3,
        },
    },
}));

export function ServicesWrapper() {
    const { classes } = useStyles();

    return (
        <Container size="lg" className={classes.container}>
            <Title align='center' className={classes.title}>Tutvuge võimalustega!</Title>
            <Grid>
                <Grid.Col md={4} sm={12} xs={12}><ServicePuhkemaja /></Grid.Col>
                <Grid.Col md={4} sm={6} xs={12}><ServicePuhkemaja /></Grid.Col>
                <Grid.Col md={4} sm={6} xs={12}><ServicePuhkemaja /></Grid.Col>
            </Grid>
        </Container>
    );
}