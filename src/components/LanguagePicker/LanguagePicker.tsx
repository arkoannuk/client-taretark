import { useEffect, useState } from 'react';
import { createStyles, UnstyledButton, Menu, Image, Group, rem } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import images from './images';
import { useLanguageContext } from '../../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';

const data = [
  { label: 'Ee', image: images.estonia },
  { label: 'En', image: images.english },
];

const useStyles = createStyles((theme, { opened }: { opened: boolean }) => ({
  control: {
    width: rem(65),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: ``,
    borderRadius: theme.radius.md,
    border: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2]
      }`,
    transition: 'background-color 150ms ease',
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[opened ? 5 : 6]
        : opened
          ? theme.colors.gray[0]
          : theme.white,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
    },
  },

  label: {
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,
  },

  icon: {
    transition: 'transform 150ms ease',
    transform: opened ? 'rotate(180deg)' : 'rotate(0deg)',
  },

  dropdown: {

  }

}));

export function LanguagePicker() {
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles({ opened });
  const { setSelectedLabel } = useLanguageContext();
  const { selectedLabel } = useLanguageContext();
  const [selected, setSelected] = useState(data[0]);
  const navigate = useNavigate(); // Initialize useHistory

  useEffect(() => {
    const selectedItem = data.find(item => item.label === selectedLabel);
    if (selectedItem) {
      setSelected(selectedItem);
    }
    
    // Update selected language and label based on URL pathname
    const urlLang = location.pathname.startsWith('/en') ? 'En' : 'Ee';
    const selectedLang = data.find(item => item.label === urlLang);
    if (selectedLang) {
      setSelected(selectedLang);
      setSelectedLabel(urlLang); // Update selected label as well
    }
  }, [selectedLabel, location.pathname]);

  const items = data.map((item) => (
    <Menu.Item
      icon={<Image src={item.image} width={20} height={20} />}
      onClick={() => {
        setSelected(item);

        if (item.label === 'En') {
          navigate(window.location.pathname.replace(`/ee`, '/en'));
        } else {
          navigate(window.location.pathname.replace(`/en`, '/ee'));
        }

        setSelectedLabel(item.label);
      }}
      key={item.label}
    >
      {item.label}
    </Menu.Item>
  ));

  return (
    <Menu
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
      radius="md"
      width="target"
      withinPortal
    >
      <Menu.Target>
        <UnstyledButton ml='0.35rem' className={classes.control}>
          <Group spacing="xs">
            <Image src={selected.image} width={25} height={25} />
          </Group>
          <IconChevronDown size="1rem" className={classes.icon} stroke={1.5} />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown className={classes.dropdown}>{items}</Menu.Dropdown>
    </Menu>
  );
}
