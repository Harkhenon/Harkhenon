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
      <div className={classes.badge}>Trop, ce n'est jamais assez</div>

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
          Développement Full-stack
          <br />spécialisé <span className={classes.accent}>React et PHP</span>
        </Text>
        <Text className={classes.subtitle} component="p">
          Sans cesse à la recherche de nouvelles approches, je développe des outils
          personnels que je partage avec plaisir afin de rendre l'informatique plus
          simple et plus intuitive. Un doux mélange de technologies pour créer de la
          simplicité, du pratique et du performant.
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
