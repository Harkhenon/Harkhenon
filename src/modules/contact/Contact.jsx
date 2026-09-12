import { Card, Group, Stack, Text, ThemeIcon } from '@mantine/core'
import { GithubIcon } from '../../components/BrandIcons.jsx'
import classes from './Contact.module.scss'

const LINKS = [
  {
    label: 'GitHub',
    value: '@Harkhenon',
    href: 'https://github.com/Harkhenon',
    icon: true,
  },
  {
    label: 'Email',
    value: 'Ouvrir un mail',
    href: 'mailto:?subject=Contact%20depuis%20le%20portfolio',
  },
]

function Contact() {
  return (
    <Stack gap="lg" className={classes.wrap}>
      <div className={classes.head}>
        <h2 className={classes.title}>Contact</h2>
        <p className={classes.intro}>
          Une idée, une collaboration ou une question ? Choisissez le canal qui vous convient.
        </p>
      </div>

      <Group gap="md" grow className={classes.cards} align="stretch" wrap="wrap">
        {LINKS.map((link) => (
          <Card
            key={link.label}
            component="a"
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
            withBorder
            padding="lg"
            radius="md"
            className={classes.card}
          >
            <Group align="center" gap="md">
              <ThemeIcon variant="light" color="forest" size="lg" radius="md">
                {link.icon ? <GithubIcon size={20} /> : <span className={classes.mailGlyph}>✉</span>}
              </ThemeIcon>
              <Stack gap={2}>
                <Text size="xs" c="dimmed" tt="uppercase" fw={600} lts={0.5}>
                  {link.label}
                </Text>
                <Text fw={600} c="forest.2" className={classes.linkValue}>
                  {link.value}
                </Text>
              </Stack>
            </Group>
          </Card>
        ))}
      </Group>
    </Stack>
  )
}

export default Contact
