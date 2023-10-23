import { Container, Grid, SimpleGrid, useMantineTheme, rem, Image } from '@mantine/core';

const PRIMARY_COL_HEIGHT = rem(450);

export function LeadGrid() {
  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - ${theme.spacing.md} / 2)`;

  return (
    <Container size="lg" mb={rem(50)}>
      <SimpleGrid cols={2} spacing="md" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
         <Image src='https://images.pexels.com/photos/3060930/pexels-photo-3060930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Random image' height={PRIMARY_COL_HEIGHT} radius="md" />
        <Grid gutter="md">
          <Grid.Col>
             <Image src='https://images.pexels.com/photos/3060930/pexels-photo-3060930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Random image' height={SECONDARY_COL_HEIGHT} radius="md" />
          </Grid.Col>
          <Grid.Col span={6}>
             <Image src='https://images.pexels.com/photos/3060930/pexels-photo-3060930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Random image' height={SECONDARY_COL_HEIGHT} radius="md" />
          </Grid.Col>
          <Grid.Col span={6}>
             <Image src='https://images.pexels.com/photos/3060930/pexels-photo-3060930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'  alt='Random image' height={SECONDARY_COL_HEIGHT} radius="md" />
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
}
