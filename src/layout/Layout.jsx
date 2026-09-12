import { AppShell, Container, Group, Burger, ActionIcon, Tooltip } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { useHashRoute } from '../router.js'
import { GithubIcon } from '../components/BrandIcons.jsx'
import Home from '../modules/home/Home.jsx'
import Projects from '../modules/projects/Projects.jsx'
import Contact from '../modules/contact/Contact.jsx'
import classes from './Layout.module.scss'

const NAV_ITEMS = [
  { id: 'home', label: 'Accueil' },
  { id: 'projects', label: 'Projets' },
  { id: 'contact', label: 'Contact' },
]

function Layout() {
  const [route, navigate] = useHashRoute()
  const [opened, { toggle }] = useDisclosure(false)

  const go = (id) => {
    navigate(id)
    toggle()
  }

  const renderRoute = () => {
    if (route === 'projects') return <Projects />
    if (route === 'contact') return <Contact />
    return <Home />
  }

  return (
    <AppShell
      header={{ height: 64 }}
      padding={0}
      className={classes.shell}
    >
      <AppShell.Header className={classes.header}>
        <Container size="lg" h="100%" px={{ base: 'md', md: 'lg' }}>
          <Group h="100%" justify="space-between" gap="lg">
            <button
              type="button"
              className={classes.brand}
              onClick={() => navigate('home')}
            >
              <span className={classes.brandMark}>H</span>
              <span className={classes.brandName}>Harkhenon</span>
            </button>

            <Group gap="xs" className={classes.desktopNav} visibleFrom="sm">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={
                    route === item.id
                      ? `${classes.navItem} ${classes.navItemActive}`
                      : classes.navItem
                  }
                  onClick={() => navigate(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </Group>

            <Group gap="sm" className={classes.headerActions}>
              <Tooltip label="GitHub" position="bottom">
                <ActionIcon
                  component="a"
                  href="https://github.com/Harkhenon"
                  target="_blank"
                  rel="noreferrer"
                  variant="subtle"
                  color="forest"
                  size="lg"
                  aria-label="GitHub"
                >
                  <GithubIcon size={20} />
                </ActionIcon>
              </Tooltip>
              <Burger
                opened={opened}
                onClick={toggle}
                className={classes.burger}
                color="forest"
                aria-label="Menu"
                hiddenFrom="sm"
              />
            </Group>
          </Group>
        </Container>
      </AppShell.Header>

      <AppShell.Navbar
        opened={opened}
        onClose={toggle}
        className={classes.navbar}
        hiddenFrom="sm"
      >
        <div className={classes.navbarInner}>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              className={
                route === item.id
                  ? `${classes.navbarItem} ${classes.navbarItemActive}`
                  : classes.navbarItem
              }
              onClick={() => go(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </AppShell.Navbar>

      <AppShell.Main className={classes.main}>
        <Container size="lg" px={{ base: 'md', md: 'lg' }} className={classes.mainInner}>
          {renderRoute()}
        </Container>

        <footer className={classes.footer}>
          <Container size="lg" px={{ base: 'md', md: 'lg' }}>
            <Group justify="space-between" wrap="nowrap" gap="md">
              <span className={classes.footerName}>© {new Date().getFullYear()} Harkhenon</span>
              <span className={classes.footerTag}>Conçu avec Vibe Coding · React · Mantine</span>
            </Group>
          </Container>
        </footer>
      </AppShell.Main>
    </AppShell>
  )
}

export default Layout
