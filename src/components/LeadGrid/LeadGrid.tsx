import { Container, Grid, SimpleGrid, useMantineTheme, rem, Image } from '@mantine/core';

const PRIMARY_COL_HEIGHT = rem(350);

export function LeadGrid() {
  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - ${theme.spacing.md} / 2)`;

  return (
    <Container pb={0} pt={0}>
      <SimpleGrid cols={2} spacing="md" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
         <Image src='https://res.cloudinary.com/dgjfea9cb/image/upload/v1689031670/taretark/result2_ikv5qe.jpg' alt='Random image' height={PRIMARY_COL_HEIGHT} radius="md" />
        <Grid gutter="md">
          <Grid.Col>
             <Image src='https://res.cloudinary.com/dgjfea9cb/image/upload/v1689031668/taretark/result3_lev1ge.jpg' alt='Random image' height={SECONDARY_COL_HEIGHT} radius="md" />
          </Grid.Col>
          <Grid.Col span={6}>
             <Image src='https://res.cloudinary.com/dgjfea9cb/image/upload/v1689031828/taretark/result4_u80as7.jpg' alt='Random image' height={SECONDARY_COL_HEIGHT} radius="md" />
          </Grid.Col>
          <Grid.Col span={6}>
             <Image src='https://res.cloudinary.com/dgjfea9cb/image/upload/v1689031669/taretark/result1_kv4ayn.jpg'  alt='Random image' height={SECONDARY_COL_HEIGHT} radius="md" />
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
}
