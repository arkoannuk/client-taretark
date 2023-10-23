import { Container, createStyles, rem, Select, TextInput, Title, Text, Accordion, Button, Grid, Flex, Stack, Paper, BackgroundImage, Center, Divider, Group } from '@mantine/core';
import { ImageCheckboxes } from './ImageCheckboxes';
import { useState } from 'react';
import { DatePickerInput } from '@mantine/dates';
import { QuantityInput } from './QuantityInput';

const useStyles = createStyles((theme) => ({
    input: {
    },

    flex: {
        flexDirection: "row",
        [theme.fn.smallerThan('md')]: {
            gap: "1rem",
            flexDirection: 'column',
        },
    },

    flexSection: {
        width: '100%',
    },

    closerBtn: {
        display: "flex",
        justifyContent: "flex-start",
        paddingTop: "9.1rem",
        paddingLeft: "0.5rem",
    },

    form: {
        backgroundColor: theme.white,
        padding: theme.spacing.xl,
        borderRadius: theme.radius.md,
        boxShadow: theme.shadows.lg,
        [theme.fn.smallerThan('sm')]: {
            paddingLeft: theme.spacing.md,
            paddingRight: theme.spacing.md,
        },
    },

    divider: {
        [theme.fn.smallerThan('md')]: {
            display: "none"
        },
    },

    topWrapper: {
        backgroundImage: `linear-gradient(-60deg, ${theme.colors.gray[5]} 0%, ${theme.colors.gray[6]
            } 100%)`,
    },
}));

export function PersonalData() {
    const { classes } = useStyles();
    const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);

    return (
        <>
            <Container fluid className={classes.topWrapper} pt={rem(50)} pb={rem(50)}>
                <Center>
                    <Title color="white">Broneeri Majutus</Title>
                </Center>
                <Container size="lg" mb={rem(50)} mt={rem(50)} p="0">
                    <div className={classes.form}>
                        <Flex gap="xl" className={classes.flex}>
                            <Stack className={classes.flexSection} justify="flex-start">
                                <Select
                                    label="Vali hoone"
                                    data={[
                                        { value: 'puhkemaja', label: 'Puhkemaja' },
                                        { value: 'stuudio-korter', label: 'Stuudio korter' },
                                        { value: 'kamping', label: 'Kämping' }
                                    ]}
                                    defaultValue="puhkemaja"
                                />
                                <div>
                                    <Text size="sm" c="#212529" fw={500} mt={rem(3)}>Hoone eelvaade</Text>
                                    <Paper h={rem(189)} mt={rem(0)}>
                                        <BackgroundImage h="100%" radius="sm"
                                            src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
                                        >
                                            <div className={classes.closerBtn}><Button size="sm">Vaata lähemalt</Button></div>
                                        </BackgroundImage>
                                    </Paper>
                                </div>
                                <ImageCheckboxes />
                            </Stack>
                            <Divider className={classes.divider} orientation="vertical" size="sm" variant="dashed" />
                            <Stack className={classes.flexSection} justify="flex-start">
                                <Grid>
                                    <Grid.Col span={12} xs={8}>
                                        <DatePickerInput
                                            type="range"
                                            label="Vali kuupäevad"
                                            placeholder="Vali kuupäevad"
                                            value={value}
                                            onChange={setValue}
                                        />
                                    </Grid.Col>
                                    <Grid.Col span={12} xs={4}>
                                        <div>
                                            <Text size="sm" c="#212529" fw={500} mt={rem(2)}>Ööbijate arv</Text>
                                            <QuantityInput />
                                        </div>
                                    </Grid.Col>
                                </Grid>
                                <TextInput label="Nimi" placeholder="Jane Doe" classNames={classes} />
                                <TextInput label="Email" placeholder="jane.doe@gmail.com" classNames={classes} />
                                <TextInput label="Telefon" placeholder="+372 5757 0000" classNames={classes} />
                                <div>
                                    <Group position="right" mt={rem(16)}>
                                        <Text size="lg" weight="semi-bold">70€ /öö</Text>
                                        <Button  size="lg" variant='gradient' w={rem(163)}>Broneeri</Button>
                                    </Group>
                                </div>
                            </Stack>

                        </Flex>
                    </div>
                </Container>
            </Container >

            < Container size="lg" mb={rem(50)} mt={rem(50)} >
                <Center>
                    <Title mb={rem(50)}>Tähtis Informatsioon</Title>
                </Center>
                <Accordion variant="contained" defaultValue="customization">
                    <Accordion.Item value="customization">
                        <Accordion.Control>Juhised check-in'iks</Accordion.Control>
                        <Accordion.Panel>Colors, fonts, shadows and many other parts are customizable to fit your design needs</Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item value="flexibility">
                        <Accordion.Control>Lisateenuste meelespea</Accordion.Control>
                        <Accordion.Panel><Title>Test</Title>Configure components appearance and behavior with vast amount of settings or overwrite any part of component styles</Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item value="stuff">
                        <Accordion.Control>Maja reeglid</Accordion.Control>
                        <Accordion.Panel>Configure components appearance and behavior with vast amount of settings or overwrite any part of component styles</Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item value="focus-ring">
                        <Accordion.Control>Tagasimaksed ja tühistamine</Accordion.Control>
                        <Accordion.Panel>With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard</Accordion.Panel>
                    </Accordion.Item>
                </Accordion>

            </Container >
        </>
    );
}