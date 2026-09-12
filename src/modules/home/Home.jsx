import vscodeLogo from '../../assets/vscode.svg'
import mistralLogo from '../../assets/mistral.svg'
import plusLogo from '../../assets/plus.svg'
import { Button, Stack, Text, Group } from '@mantine/core'
import { useHashRoute } from '../../router.js'
import classes from './Home.module.scss'

function Home() {
  const [, navigate] = useHashRoute()

  return (
    <Stack align="center" gap="xl" className={classes.hero}>
      <div className={classes.badge}>Vibe Coding · Développement classique</div>

      <div className={classes.logoRow}>
        <span className={classes.logoChip}>
          <img src={vscodeLogo} alt="VS Code" className={classes.logoVscode} />
          <span className={classes.logoLabel}>VS Code</span>
        </span>

        <span className={classes.plus} aria-hidden="true">
          <img src={plusLogo} alt="" className={classes.plusIcon} />
        </span>

        <span className={classes.logoChip}>
          <img src={mistralLogo} alt="Mistral AI" className={classes.logoMistral} />
          <span className={classes.logoLabel}>Mistral AI</span>
        </span>
      </div>

      <Stack align="center" gap="xs" className={classes.copy}>
        <Text className={classes.title} component="h1">
          Je développe en <span className={classes.accent}>vibe coding</span>
          <br />et de manière classique.
        </Text>
        <Text className={classes.subtitle} component="p">
          Deux approches complémentaires : la rigueur du code écrit à la main,
          et la vitesse d'une IA qui comprend l'intention.
        </Text>
      </Stack>

      <Group gap="sm" className={classes.actions}>
        <Button color="forest" radius="md" onClick={() => navigate('projects')}>
          Voir mes projets
        </Button>
        <Button
          variant="outline"
          color="forest"
          radius="md"
          onClick={() => navigate('contact')}
        >
          Me contacter
        </Button>
      </Group>
    </Stack>
  )
}

export default Home
