import { useEffect, useState } from 'react'

export const ROUTES = {
  home: 'home',
  projects: 'projects',
  contact: 'contact',
}

function parseHash() {
  const raw = window.location.hash.replace(/^#\/?/, '').trim()
  if (!raw) return ROUTES.home
  return ROUTES[raw] ? ROUTES[raw] : ROUTES.home
}

export function useHashRoute() {
  const [route, setRoute] = useState(parseHash)

  useEffect(() => {
    const onHash = () => setRoute(parseHash())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const navigate = (next) => {
    const target = ROUTES[next] ? next : ROUTES.home
    window.location.hash = `/${target}`
  }

  return [route, navigate]
}
