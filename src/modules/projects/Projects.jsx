import { useEffect, useState } from 'react'
import {
  SimpleGrid,
  Card,
  Text,
  Group,
  Badge,
  Anchor,
  Stack,
  Skeleton,
  Alert,
  ThemeIcon,
  Box,
} from '@mantine/core'
import { GithubIcon } from '../../components/BrandIcons.jsx'
import classes from './Projects.module.scss'

const GITHUB_USER = 'Harkhenon'
const API_URL = `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`

function mapRepo(repo) {
  return {
    id: repo.id,
    name: repo.name,
    description: repo.description,
    url: repo.html_url,
    language: repo.language,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    updatedAt: repo.pushed_at,
    homepage: repo.homepage,
    archived: repo.archived,
    fork: repo.fork,
  }
}

function formatDate(iso) {
  if (!iso) return ''
  const d = new Date(iso)
  return d.toLocaleDateString('fr-FR', { month: 'short', year: 'numeric' })
}

function Projects() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let active = true

    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
      })
      .then((data) => {
        if (!active) return
        const list = data
          .filter((r) => !r.fork && !r.archived)
          .sort((a, b) => b.pushed_at.localeCompare(a.pushed_at))
          .map(mapRepo)
        setRepos(list)
        setLoading(false)
      })
      .catch((err) => {
        if (!active) return
        setError(err.message)
        setLoading(false)
      })

    return () => {
      active = false
    }
  }, [])

  return (
    <Stack gap="lg" className={classes.wrap}>
      <div className={classes.head}>
        <h2 className={classes.title}>Projets</h2>
        <p className={classes.intro}>
          Mes dépôts publics sur GitHub, récupérés en direct via l'API GitHub.
        </p>
      </div>

      {error && (
        <Alert color="red" variant="light" title="Impossible de charger les projets">
          {error}
        </Alert>
      )}

      {loading && (
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
          {Array.from({ length: 6 }).map((_, i) => (
            <Card key={i} withBorder className={classes.card} padding="lg" radius="md">
              <Skeleton height={22} width="60%" mb="xs" />
              <Skeleton height={14} mt="md" />
              <Skeleton height={14} mt={6} width="80%" />
              <Group mt="lg">
                <Skeleton height={18} width={70} radius="sm" />
                <Skeleton height={18} width={70} radius="sm" />
              </Group>
            </Card>
          ))}
        </SimpleGrid>
      )}

      {!loading && !error && repos.length === 0 && (
        <Text c="gray.5" ta="center" py="xl">
          Aucun dépôt public à afficher pour le moment.
        </Text>
      )}

      {!loading && !error && repos.length > 0 && (
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
          {repos.map((repo) => (
            <Card
              key={repo.id}
              component="a"
              href={repo.url}
              target="_blank"
              rel="noreferrer"
              withBorder
              padding="lg"
              radius="md"
              className={classes.card}
            >
              <Group justify="space-between" mb="xs" align="flex-start">
                <Text fw={600} className={classes.repoName}>
                  {repo.name}
                </Text>
                <ThemeIcon variant="subtle" color="forest" size="sm">
                  <GithubIcon size={18} />
                </ThemeIcon>
              </Group>

              <Text size="sm" c="gray.5" className={classes.repoDesc} lineClamp={3}>
                {repo.description || 'Aucune description fournie.'}
              </Text>

              <Group gap="xs" mt="md" className={classes.meta}>
                {repo.language && (
                  <Badge variant="light" color="forest" size="sm" radius="sm">
                    {repo.language}
                  </Badge>
                )}
                {repo.stars > 0 && (
                  <Badge variant="subtle" color="gray" size="sm" radius="sm">
                    ★ {repo.stars}
                  </Badge>
                )}
                {repo.forks > 0 && (
                  <Badge variant="subtle" color="gray" size="sm" radius="sm">
                    ⑂ {repo.forks}
                  </Badge>
                )}
              </Group>

              <Box mt="md" className={classes.foot}>
                <Text size="xs" c="dimmed">
                  Mis à jour {formatDate(repo.updatedAt)}
                </Text>
                {repo.homepage && (
                  <Anchor
                    href={repo.homepage}
                    target="_blank"
                    rel="noreferrer"
                    size="xs"
                    color="forest"
                    onClick={(e) => e.stopPropagation()}
                    className={classes.demoLink}
                  >
                    Démo →
                  </Anchor>
                )}
              </Box>
            </Card>
          ))}
        </SimpleGrid>
      )}
    </Stack>
  )
}

export default Projects
